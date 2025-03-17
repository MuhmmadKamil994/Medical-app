import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./blogs.scss";

const medicalBlogs = [
    {
        id:1,
      title: "The Future of AI in Medical Imaging",
      description: "How AI is enhancing accuracy in X-rays, MRIs, and CT scans.",
      image: require('../../assests/blog2.webp'),
      date: "March 17, 2025",
    },
    {
        id:2,
      title: "The Role of Robotics in Modern Surgery",
      description: "How robotic-assisted surgery is improving precision in operations.",
      image: require('../../assests/Surgery.webp'),
      date: "March 18, 2025",
    },
    {
        id:3,
      title: "AI-Powered Drug Discovery and Development",
      description: "How AI is speeding up the process of discovering new medicines.",
      image: require('../../assests/Drug.webp'),
      date: "March 19, 2025",
    },
    {
        id:4,
      title: "Wearable Health Tech: Monitoring Patients in Real-Time",
      description: "How AI-driven wearable devices are changing healthcare monitoring.",
      image: require('../../assests/patientmonitor.webp'),
      date: "March 20, 2025",
    },
    {
        id:5,
      title: "The Evolution of Telemedicine: AI's Role in Remote Healthcare",
      description: "How AI-powered telemedicine is making healthcare more accessible worldwide.",
      image: require('../../assests/evolution.webp'), 
      date: "March 21, 2025",
    },
    {
      id: 6,
      title: "AI and Mental Health: Revolutionizing Therapy and Diagnosis",
      description: "How AI is transforming therapy with chatbots and predictive analytics.",
      image: require('../../assests/mentalhealth.webp'),
      date: "March 22, 2025",
  }
  ];
  
  

const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="blog-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="blog-title">Latest Blog Posts</h1>
      <div className="blog-grid">
        {medicalBlogs.map((post) => (
          <motion.div
            className="blog-card"
            key={post.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <span className="date">{post.date}</span>
              <button onClick={() => navigate(`/blog/${post.id}`)}>Read More</button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogPage;
