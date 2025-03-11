import React from "react";
import BlogData from "./BlogsData";
import BlogCard from "./BlogsCards";
import "./blogs.scss";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <motion.div 
      className="blogs-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="blogs-title">Latest Medical Blogs</h1>
      <div className="blogs-grid">
        {BlogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </motion.div>
  );
};

export default Blogs;
