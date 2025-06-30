const { GoogleGenerativeAI } = require("@google/generative-ai");
const {
  questionAnswerPrompt,
  conceptExplainPrompt,
} = require("../utils/prompts");

require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

//  @desc Generate interview questions/answers using GEMINI
//  @route POST /api/ai/generate-questions
//  @access Private
const generateInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, numberOfQuestions } = req.body;

    if (!role || !experience || !topicsToFocus || !numberOfQuestions) {
      return res.status(400).json({ message: "Missing required field/s." });
    }

    const prompt = questionAnswerPrompt(
      role,
      experience,
      topicsToFocus,
      numberOfQuestions
    );

    // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const rawText = await response.text();

    // Clean remove the ```json and ``` from beggining and end

    const cleanedText = rawText
      .replace(/^```json\s*/, "")
      .replace(/```$/, "")
      .trim();

    const arrayMatch = cleanedText.match(/\[\s*{[\s\S]*}\s*\]/);
    if (!arrayMatch) throw new Error("No valid JSON array found.");

    const data = JSON.parse(arrayMatch[0]);

    res.status(200).json(data);
  } catch (error) {
    console.error("Error generating interview questions:", error);
    res.status(500).json({
      message: "Failed to generate Questions.",
      error: error.message,
    });
  }
};

//  @desc Generate explains a interview question
//  @route POST /api/ai/generate-explanation
//  @access Private
const generateConceptExplanation = async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) {
      return res
        .status(400)
        .json({ message: "Missing required fields ('question')." });
    }

    const prompt = conceptExplainPrompt(question);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const rawText = await response.text();

    // Remove any markdown wrappers
    const cleanedText = rawText
      .replace(/^```json\s*/, "")
      .replace(/```$/, "")
      .trim();

    // Extract JSON safely using regex
    const jsonMatch = cleanedText.match(/{[\s\S]*}/);
    if (!jsonMatch) {
      throw new Error("No valid JSON object found in AI response.");
    }

    const data = JSON.parse(jsonMatch[0]);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error generating concept explanation:", error);
    res.status(500).json({
      message: "Failed to generate Questions.",
      error: error.message,
    });
  }
};

module.exports = { generateInterviewQuestions, generateConceptExplanation };
