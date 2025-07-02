require("dotenv").config();

const express = require("express");

const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const questionRoutes = require("./routes/questionRoutes");
const {
  generateInterviewQuestions,
  generateConceptExplanation,
} = require("./controllers/aiController");
const upload = require("./middlewares/uploadMiddleware");
const { protect } = require("./middlewares/authMiddleware");

const app = express();

// Middleware to handle CORS

// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

const allowedOrigins = [
  "http://localhost:5173", // for local dev
  "https://your-frontend.vercel.app", // replace with your Vercel URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB();

//  Middleware
app.use(express.json());

//  Routes
app.use("/api/auth", authRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/ai/generate-questions", protect, generateInterviewQuestions);
app.use("/api/ai/generate-explanation", protect, generateConceptExplanation);

// Server uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));

//  Start Server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
