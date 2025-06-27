const Session = require("../models/Session");
const Question = require("../models/Question");

//  @desc Create a new session and linked questions
//  @route POST /api/sessions/create
//  @Private

exports.createSession = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, description, questions } =
      req.body;
    const userId = req.user._id;

    const session = await Session.create({
      user: userId,
      role,
      experience,
      topicsToFocus,
      description,
    });

    const questionDocs = await Promise.all(
      questions.map(async (q) => {
        const question = await Question.create({
          session: session._id,
          question: q.question,
          answer: q.answer,
        });
        return question._id;
      })
    );

    session.questions = questionDocs;

    await session.save();

    res.status(201).json({ success: true, session });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.getMySessions = async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.user.id })
      .sort({
        createdAt: -1,
      })
      .populate("questions");

    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.getSessionById = async (req, res) => {
  try {
  } catch (error) {}
};

exports.deleteSession = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
