import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "../src/pages/Auth/Login";
import SignUp from "../src/pages/Auth/SignUp";
import LandingPage from "./pages/LandingPage";
import Dashboard from "../src/pages/Home/Dashboard";
import InterviewPrep from "./pages/InterviewPrep/InterviewPrep";
import UserProvider from "./Context/userContext";

function App() {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route
              path="/interview-prep/:sessionId"
              element={<InterviewPrep></InterviewPrep>}
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          </Routes>
        </Router>
        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "13px",
            },
          }}
        ></Toaster>
      </div>
    </UserProvider>
  );
}

export default App;
