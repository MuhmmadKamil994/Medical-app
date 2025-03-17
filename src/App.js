import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

import {  Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Doctorspage from "./Components/Doctors/doctors";
import Depart from "./Components/Department/Depart";
import About from "./Components/about/about";
import Contact from "./Components/Contact/contact";
import Navbar from "./Navbar/navbar";
import BlogPage from "./Components/Blogs/Blogs";
import BlogDetails from "./Components/Blogs/Blogdetail";
import { AuthProvider } from "./Components/Doctors/Auth";
import DepartmentDetail from "./Components/Department/DepartDetail";
import { DoctorsProvider } from "./Components/Doctors/DoctorData";
import LoginSignup from "./Components/Doctors/Login";
function App() {
  return (
    <>
    <Navbar/>
    
      <div className="container" style={{ marginTop: "80px", padding: "20px" }}>
  <AuthProvider>
        <DoctorsProvider>
        <Routes>
          <Route path="/" element={<Home/>} />   
        <Route path="/home" element={<Home />} />
           <Route path="/doctors" element={<Doctorspage />} />
           <Route path="/depart" element={<Depart />} />
           <Route path="/login" element={<LoginSignup/>}/>
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/Blogs" element={<BlogPage/>}/>
          <Route path="/blog/:id" element={<BlogDetails/>}/>
<Route path="/departments/:id" element={<DepartmentDetail />} />

<Route />
        </Routes>
        </DoctorsProvider>
        </AuthProvider>
      </div>
      </>
  );
}

export default App;
