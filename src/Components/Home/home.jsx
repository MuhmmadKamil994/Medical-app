import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import "./home.scss"; 
import Doctorimg from "../../assests/Doctorimg.webp";  

const Home = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Hero Section Animations
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
    floating: {
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
    },
  };

  // Feature Section Animation
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
        <motion.div 
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1>Your Health, Our Priority</h1>
          <p>Expert care from the best medical professionals.</p>
          <motion.div className="buttons">
             <motion.div variants={buttonVariants} whileHover="hover">
    <Link to="/doctors" className="btn">Find a Doctor</Link>
  </motion.div>

  <motion.div variants={buttonVariants} whileHover="hover">
    <Link to="/contact" className="btn secondary">Book an Appointment</Link>
  </motion.div>
        </motion.div>
     
 </motion.div>

        <motion.div 
          className="hero-image"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          whileHover="floating"
        >
          <img src={Doctorimg} alt="Doctor" />
        </motion.div>
      </section>

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
            whileTap={{ scale: 0.95 }} 
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
