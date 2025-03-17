import React, { createContext, useState, useEffect } from "react";

export const DoctorsContext = createContext();

export const DoctorsProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDoctors([
        { id: 1, name: "Dr. Alex Johnson", specialty: "Cardiologist", image: require("../../assests/doctor1.jpg") },
        { id: 2, name: "Dr. Sarah Lee", specialty: "Neurologist", image: require("../../assests/doctor2.jpg") },
        { id: 3, name: "Dr. David Kim", specialty: "Dentist", image: require("../../assests/doctor3.jpg")},
        { id: 4, name: "Dr. Emily Brown", specialty: "Pulmonologist", image: require("../../assests/doctor4.avif") },
        { id: 6, name: "Dr. Ganga Morti", specialty: "General Physician", image: require("../../assests/doctor5.avif") },
        { id: 7, name: "Dr. Malik Nazir", specialty: "MBBS", image: require("../../assests/doctor6.avif") },
        { id: 8, name: "Dr. Ayesha", specialty: "Therpiast", image: require("../../assests/doctor7.avif") },
        { id: 9, name: "Dr. Malik Mudasir", specialty: "Lab Technologist", image: require("../../assests/doctor8.avif") },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <DoctorsContext.Provider value={{ doctors, loading }}>
      {children}
    </DoctorsContext.Provider>
  );
};
