import React, { useState } from "react";
import { motion } from "framer-motion";
import "./contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required!";
    if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="contact-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Get In Touch
      </motion.h1>

      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <motion.div className="input-group" whileHover={{ scale: 1.05 }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </motion.div>

        <motion.div className="input-group" whileHover={{ scale: 1.05 }}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </motion.div>

        <motion.div className="input-group" whileHover={{ scale: 1.05 }}>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "error" : ""}
          />
          {errors.message && <span className="error-text">{errors.message}</span>}
        </motion.div>

        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.1, backgroundColor: "#1abc9c" }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>

        {submitted && (
          <motion.p
            className="success-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ✅ Your message has been sent successfully!
          </motion.p>
        )}
      </motion.form>
    </div>
    
  );
};

export default Contact;
