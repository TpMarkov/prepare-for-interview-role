const { GoogleGenerativeAI } = require("@google/generative-ai");
const {
  questionAnswerPrompt,
  conceptExplainPrompt,
} = require("../utils/prompts");

const ai = new GoogleGenerativeAI({
  apiKey: "AIzaSyBR55wiqMILhxHsGhYoTu0Uhow6tFTkROc",
});

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

    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const rawText = await response.text();

    const cleanedText = rawText
      .replace(/^```json\s*/, "")
      .replace(/```$/, "")
      .trim();

    const data = JSON.parse(cleanedText);

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
const generateConceptExplanation = async (req, res) => {};

module.exports = { generateInterviewQuestions, generateConceptExplanation };
