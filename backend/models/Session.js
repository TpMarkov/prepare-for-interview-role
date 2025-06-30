const mongoose = require("mongoose");
const User = require("./User");

const sessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    role: { type: String, required: true },
    experience: { type: String, required: true },
    description: { type: String },
    topicsToFocus: { type: String, required: true },
    questions: [{ type: mongoose.Types.ObjectId, ref: "Question" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Session", sessionSchema);
