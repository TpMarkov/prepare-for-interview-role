# 🧠 InterviewMaster

**An intelligent, customizable mock interview prep tool for web developers.**  
Built with React, Node.js, Express, and MongoDB.

---

## 🚀 Features

- 🔐 User registration and login via email and password
- 🎯 Create custom interview sessions with:
  - Desired job role (e.g., Front-End Developer, UI/UX Designer, etc.)
  - Selected topics to focus on
  - Experience level (e.g., 0–2 years)
- 🧹 Easily delete old sessions and create new ones
- ➕ Add extra questions to an ongoing session
- 📖 Get detailed explanations for each interview question

---

## 🛠️ Tech Stack

- **Frontend**: Vite + React + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB

---

## 📸 Screenshots

> ⚠️ Replace the placeholders with your real image file names.

<img src="./screenshots/homepage.png" alt="Homepage" width="100%" />
<img src="./screenshots/create-session.png" alt="Create Session" width="100%" />
<img src="./screenshots/question-detail.png" alt="Question Detail" width="100%" />
<img src="./screenshots/add-question.png" alt="Add Question" width="100%" />
<img src="./screenshots/session-history.png" alt="Session History" width="100%" />
<img src="./screenshots/auth.png" alt="Authentication" width="100%" />

---

## 🧪 How to Run Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/TpMarkov/prepare-for-interview-role.git
   ```

2. Navigate to backend

   - open new terminal

   ```bash
   cd /backend
   ```

   - npm install
   - create new file and name it .env
   - paste this code in the .env file

   PORT=8000

   MONGO_URI=mongodb+srv://markowcvetan:kfyXT1bPMDFcXLh4@interviewprepai.j07ksax.mongodb.net/?retryWrites=true&w=majority&appName=InterviewPrepAI

   JWT_SECRET=4cbc602a33cd8442b1f6cbe91707834eb7f49cf807303ea72df14108691605777666c9c3e6b15cc7bb4274b23f3d6c7a5c8de24399a20e285b7ca945e6707a38

   GEMINI_API_KEY=AIzaSyAKW8XlkcJ5ZNyp8MecyS9OdDYwObSsAeE

   - save the file and type npm run dev in to the console

3. Navigate to /frontend/interview-preparation-app

   - open new terminal
   - in the terminal type

   ```bash
   cd /frontend/interview-preparation-app
   npm install
   npm run dev
   ```

   You're ready to go.
