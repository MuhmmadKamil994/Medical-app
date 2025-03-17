import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import "./chat.scss"; 

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hello! How can I assist you today?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    if (isOpen) {
      setMessages([{ text: "Hello! How can I assist you today?", sender: "bot" }]);
    }
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      const response = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      }, {
        headers: {
          "Authorization": `Bearer YOUR_OPENAI_API_KEY`,
          "Content-Type": "application/json",
        },
      });

      const botReply = response.data.choices[0].message.content;
      setMessages((prevMessages) => [...prevMessages, { text: botReply, sender: "bot" }]);
    } catch (error) {
      setMessages((prevMessages) => [...prevMessages, { text: "Sorry, I am unable to respond at the moment.", sender: "bot" }]);
    }
  };

  return (
    <div className="chatbot-container">
      <motion.div className="chatbot-icon" onClick={toggleChat} whileHover={{ scale: 1.2 }}>
        {isOpen ? <FaTimes size={25} /> : <FaRobot size={25} />}
      </motion.div>

      {isOpen && (
        <motion.div 
          className="chatbot-window" 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: 50 }} 
        >
          <div className="chatbot-header">
            <h3>Reception AI Chatbot</h3>
            <FaTimes onClick={toggleChat} style={{ cursor: "pointer" }} />
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}><FaPaperPlane /></button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
