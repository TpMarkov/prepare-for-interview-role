require("dotenv").config();

const express = require("express");

const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const sessionsRoutes = require("./routes/questionRoutes");
const questionRoutes = require("./routes/questionRoutes");
const upload = require("./middlewares/uploadMiddleware");

const app = express();

// Middleware to handle CORS

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB();

//  Middleware
app.use(express.json());

//  Routes
app.use("/api/auth", authRoutes);
// app.use("/api/sessions", sessionsRoutes);
// app.use("/api/questions", questionRoutes);

// app.use("/api/ai/generate-questions", protect, generateInterviewGenerate);
// app.use("/api/ai/generate-explanation", protect, generateConceptExplanation);
// Server uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));

//  Start Server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
