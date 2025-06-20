import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "../src/pages/Auth/Login";
import SignUp from "../src/pages/Auth/SignUp";
import LandingPage from "./pages/LandingPage";
import Dashboard from "../src/pages/Home/Dashboard";
import InterviewPrep from "./pages/InterviewPrep/InterviewPrep";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InterviewPrep />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
