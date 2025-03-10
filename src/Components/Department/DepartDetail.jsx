import React from "react";
import { useParams, Link } from "react-router-dom";
import "./departdetail.scss";

const departmentDetails = {
  cardiology: {
    title: "Cardiology",
    description: "Our Cardiology Department provides advanced treatment for heart conditions, including diagnostics, surgery, and rehabilitation.",
  },
  neurology: {
    title: "Neurology",
    description: "We specialize in treating brain and nervous system disorders, from stroke management to epilepsy treatment.",
  },
  dentistry: {
    title: "Dentistry",
    description: "Offering dental care, including root canals, orthodontics, cosmetic dentistry, and preventive care.",
  },
  pulmonology: {
    title: "Pulmonology",
    description: "Providing expert treatment for respiratory diseases such as asthma, COPD, and lung infections.",
  },
  "general-medicine": {
    title: "General Medicine",
    description: "We offer general health check-ups, vaccinations, chronic disease management, and preventive healthcare.",
  },
  pathology: {
    title: "Pathology",
    description: "Advanced laboratory diagnostics, blood tests, and biopsies to support accurate diagnoses.",
  },
};

const DepartmentDetail = () => {
  const { id } = useParams();
  const department = departmentDetails[id];

  if (!department) {
    return <h2>Department not found</h2>;
  }

  return (
    <div className="department-detail">
      <h1>{department.title}</h1>
      <p>{department.description}</p>
      <Link to="/departments" className="btn">Back to Departments</Link>
    </div>
  );
};

export default DepartmentDetail;
