import React from "react";
import "./about.scss";
import { motion } from "framer-motion";
import { FaUsers, FaAward, FaLaptopCode } from "react-icons/fa";

const stats = [
  { icon: <FaUsers />, label: "Happy Clients", value: "5,000+" },
  { icon: <FaAward />, label: "Awards Won", value: "25+" },
  { icon: <FaLaptopCode />, label: "Projects Completed", value: "100+" },
];

const team = [
  { name: "Dr. Alex Johnson", role: "Cardiologist", img: require("../../assests/doctor1.jpg" )},
  { name: "Dr. Sarah White", role: "Neurologist", img: require("../../assests/doctor2.jpg" ) },
  { name: "Dr. John Doe", role: "Surgeon", img: require("../../assests/doctor3.jpg" ) },
];

const About = () => {
  return (
    <div className="about-container">
      <motion.section className="about-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Our Medical Care</h1>
        <p>Providing world-class medical services with highly qualified professionals.</p>
      </motion.section>

      <section className="about-stats">
        {stats.map((stat, index) => (
          <motion.div key={index} className="stat-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <div className="icon">{stat.icon}</div>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </section>

      <section className="about-team">
        <h2>Meet Our Experts</h2>
        <div className="team-members">
          {team.map((member, index) => (
            <motion.div key={index} className="team-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

