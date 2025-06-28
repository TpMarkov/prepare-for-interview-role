const { GoogleGenAI } = require("@google/genai");
const {
  questionAnswerPrompt,
  conceptExplainPrompt,
} = require("../utils/prompts");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

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

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      content: prompt,
    });

    let rawText = response.text;

    //  Clearn it: Remove ```json and``` from beggining and end
    const cleanedText = rawText
      .replace(/^```json\s*/, "") // remove starting ```json
      .replace(/```$/, "") // removes ending ```
      .trim(); // removes extra spacing

    //  Now safe to parse
    const data = JSON.parse(cleanedText);

    res.status(200).json(data);
  } catch (error) {
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
