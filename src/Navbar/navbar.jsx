import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import logo from '../assests/Medical image.webp'
 const  Navbar = () => {
  return (

    <div className='navbar-container'>
      <nav>
      <div className="logo">
          <img src={logo} alt="Medica Logo" />
          <h1>Medica</h1>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/depart">Departments</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/doctors">Doctors</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
console.log('it is not rendering')

export default Navbar


