import React from "react";
import { useParams } from "react-router-dom";
import BlogData from "./BlogsData";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = BlogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <motion.div
      className="blog-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.content}</p>
      <div className="blog-meta">
        <span className="category">{blog.category}</span>
        <span className="date">{blog.date}</span>
      </div>
    </motion.div>
  );
};

export default BlogDetail;
