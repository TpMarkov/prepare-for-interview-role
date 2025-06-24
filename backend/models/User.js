import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: Strirng, required: true, unique: true },
    password: { type: String, required: true },
    profileImageUrl: { type: String, defaul: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
