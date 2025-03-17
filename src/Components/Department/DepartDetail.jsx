import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { departmentDetails } from "./DepartData"; 
import "./departdetail.scss";
import { motion } from "framer-motion";

const DepartmentDetail = () => {
  const { id } = useParams();
  const department = departmentDetails[id];

  if (!department) {
    return <h2 className="not-found">Department Not Found</h2>;
  }

  return (
    <motion.div className="department-detail"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>{department.title}</h1>
      <p>{department.description}</p>
      <Link to="/depart" className="back-to-depart">Back to Departments</Link>
    </motion.div>
  );
};

export default DepartmentDetail;
