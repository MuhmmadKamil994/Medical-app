import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const BlogCard = ({ blog }) => {
  return (
    <motion.div
      className="blog-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <img src={blog.image} alt={blog.title} loading="lazy" />
      <div className="blog-content">
        <h2>{blog.title}</h2>
        <p>{blog.description}</p>
        <div className="blog-meta">
          <span className="category">{blog.category}</span>
          <span className="date">{blog.date}</span>
        </div>
        <Link to={`/blog/${blog.id}`} className="btn">
          Read More
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
