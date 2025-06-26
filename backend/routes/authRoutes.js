const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/authController");

const { protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

//  Auth Routes
//  Register user POST @ /api/auth/register
router.post("/register", registerUser); //  Register User

//  Login user POST @ /api/auth/login
router.post("/login", loginUser); //    Login User

//  Get user profile details GET @ /api/auth/profile
router.get("/profile", protect, getUserProfile); // Get User Details

//  Upload image
router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Please add file first" });
  }
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  res.status(200).json({ imageUrl });
});

module.exports = router;
