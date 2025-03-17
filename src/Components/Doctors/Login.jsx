import React, { useState, useContext } from "react";
import { AuthContext } from "./Auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import "./aut.scss";

const LoginSignup = () => {
  const { loginUser, registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "", role: "user" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        registerUser(formData.fullName, formData.email, formData.password, formData.role);
        alert("Signup successful! Please log in.");
        setIsSignup(false);
      } else {
        loginUser(formData.email, formData.password);
        navigate("/doctors");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <motion.div className="auth-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>{isSignup ? "Signup" : "Login"}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button type="submit">{isSignup ? "Signup" : "Login"}</button>
      </form>
      <button className="toggle-btn" onClick={toggleMode}>
        {isSignup ? "Already have an account? Login" : "New here? Signup"}
      </button>
    </motion.div>
  );
};

export default LoginSignup;
