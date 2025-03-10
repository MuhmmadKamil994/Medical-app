import React from "react";
import { Link } from "react-router-dom";
import "./depart.scss";
import { motion } from "framer-motion";
import { FaHeartbeat, FaBrain, FaTooth, FaLungs, FaUserMd, FaMicroscope } from "react-icons/fa";

const Departments = [
  { id: "cardiology", icon: <FaHeartbeat />, title: "Cardiology", desc: "Advanced heart care with expert cardiologists." },
  { id: "neurology", icon: <FaBrain />, title: "Neurology", desc: "Brain and nervous system treatments with specialists." },
  { id: "dentistry", icon: <FaTooth />, title: "Dentistry", desc: "Best dental care with modern technology." },
  { id: "pulmonology", icon: <FaLungs />, title: "Pulmonology", desc: "Lung and respiratory treatments with specialists." },
  { id: "general-medicine", icon: <FaUserMd />, title: "General Medicine", desc: "All types of general health services available." },
  { id: "pathology", icon: <FaMicroscope />, title: "Pathology", desc: "Accurate lab diagnostics and testing." },
];

const Depart = () => {
  return (
    <div className="departments-container">
      {/* Page Header */}
      <motion.section className="departments-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our Medical Departments</h1>
        <p>We offer specialized healthcare services for a wide range of medical needs.</p>
      </motion.section>

      {/* Departments Grid */}
      <section className="departments-grid">
        {Departments.map((dept, index) => (
          <motion.div key={dept.id} className="department-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="icon">{dept.icon}</div>
            <h3>{dept.title}</h3>
            <p>{dept.desc}</p>
            <Link to={`/departments/${dept.id}`} className="btn">Learn More</Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Depart;
