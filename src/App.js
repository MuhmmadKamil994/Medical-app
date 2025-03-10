import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

import {  Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Doctors from "./Components/Doctors/doctors";
import Depart from "./Components/Department/depart";
import About from "./Components/about/about";
import Blogs from "./Components/Blogs/blogs";
import Contact from "./Components/Contact/contact";
import Navbar from "./Navbar/navbar";

function App() {
  return (
    <>
    <Navbar/>
    
      <div className="container" style={{ marginTop: "80px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home/>} />   
        <Route path="/home" element={<Home />} />
           <Route path="/doctors" element={<Doctors />} />
           <Route path="/depart" element={<Depart />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/blogs" element={<Blogs />} /> 

        </Routes>

      </div>
      </>
  );
}

export default App;
