const mongoose = require("mongoose");
const User = require("./User");

const sessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    role: { type: String, required: true },
    experience: { type: String, required: true },
    topicsToFocus: { type: String, required: true },
    descripton: String,
    question: { type: mongoose.Types.ObjectId, ref: "Question" },
  },
  { timestamps: true }
);

module.exports = mongoose.Schema("Session", sessionSchema);
