import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import Doctorimg from "../../assests/Doctorimg.webp";
import { motion, useInView } from "framer-motion";

const Home = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom },
    }),
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Your Health, Our Priority</h1>
          <p>Expert care from the best medical professionals.</p>
          <Link to="/doctors" className="btn">Find a Doctor</Link>
          <Link to="/contact" className="btn secondary">Book an Appointment</Link>
        </div>
        <div className="hero-image">
          <img src={Doctorimg} alt="Doctor" />
        </div>
      </section>

      {/* Features Section with Scroll & Hover Animation */}
      <section className="features" ref={sectionRef}>
        {[ 
          { icon: "fas fa-user-md", title: "Qualified Doctors", text: "Highly trained professionals ready to care for you." },
          { icon: "fas fa-procedures", title: "Advanced Equipment", text: "State-of-the-art technology for precise treatments." },
          { icon: "fas fa-ambulance", title: "24/7 Emergency", text: "Immediate medical attention anytime you need." }
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="feature"
            variants={featureVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={index * 0.2}
            whileHover={{
              opacity: 1,
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }} // Optional: Slight shrink when clicked
          >
            <i className={feature.icon}></i>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Home;
