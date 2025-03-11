import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

import {  Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Doctorspage from "./Components/Doctors/doctors";
import Depart from "./Components/Department/Depart";
import About from "./Components/about/about";
import Blogs from "./Components/Blogs/main";
import BlogDetails from "./Components/Blogs/BlogDetail";
import Contact from "./Components/Contact/contact";
import Navbar from "./Navbar/navbar";
import DepartmentDetail from "./Components/Department/DepartDetail";
import { DoctorsProvider } from "./Components/Doctors/DoctorData";
function App() {
  return (
    <>
    <Navbar/>
    
      <div className="container" style={{ marginTop: "80px", padding: "20px" }}>
        <DoctorsProvider>
        <Routes>
          <Route path="/" element={<Home/>} />   
        <Route path="/home" element={<Home />} />
           <Route path="/doctors" element={<Doctorspage />} />
           <Route path="/depart" element={<Depart />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/blog/:id" element={<BlogDetails />}/> 
<Route path="/departdetail/:id" element={<DepartmentDetail/>}/>
<Route />
        </Routes>
        </DoctorsProvider>
      </div>
      </>
  );
}

export default App;
