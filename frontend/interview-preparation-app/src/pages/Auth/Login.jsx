import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setCurrentPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //  Handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();
    
  }

  return <div></div>;
}

export default Login;
