const express = require("express");

const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/authController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

//  Auth Routes
//  Register user POST @ /api/auth/register
router.post("/register", registerUser); //  Register User

//  Login user POST @ /api/auth/login
router.post("/login", loginUser); //    Login User

//  Get user profile details GET @ /api/auth/profile
router.get("/profile", protect, getUserProfile); // Get User Details

module.exports = router;
