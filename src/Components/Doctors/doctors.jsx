import React, { useState, useContext, Suspense } from "react";
import { DoctorsContext } from "./DoctorData";
import { AuthContext } from './Auth'; 
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./doctors.scss";

const Doctors = () => {
  const { doctors, loading } = useContext(DoctorsContext);
  const { user } = useContext(AuthContext);
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const handleHire = (doctorName) => {
    if (!user) {
      navigate("/login");
    } else {
      alert(`You have hired ${doctorName}!`);
    }
  };

  const filteredDoctors = filter === "All" ? doctors : doctors.filter((doc) => doc.specialty === filter);

  return (
    <div className="doctors-container">
      <h1 className="title">Our Experienced Doctors</h1>

      <div className="filter-buttons">
        {["All", "Cardiologist", "Neurologist", "Dentist", "Pulmonologist", "General Physician"].map((spec) => (
          <button key={spec} onClick={() => setFilter(spec)} className={filter === spec ? "active" : ""}>
            {spec}
          </button>
        ))}
      </div>

      {loading ? (
        <h2 className="loading">Loading Doctors...</h2>
      ) : (
        <motion.div className="doctors-grid">
          {filteredDoctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              className="doctor-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="image-container">
                <img src={doctor.image} alt={doctor.name} />
                <div className="overlay"></div>
              </div>
              <div className="content">
                <h3>{doctor.name}</h3>
                <p>{doctor.specialty}</p>
                <button className="hire-button" onClick={() => handleHire(doctor.name)}>Hire Doctor</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

const DoctorsPage = () => (
  <Suspense fallback={<h2 className="loading">Loading...</h2>}>
    <Doctors />
  </Suspense>
);

export default DoctorsPage;
