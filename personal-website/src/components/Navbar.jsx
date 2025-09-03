import React from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className='navbar_container'>
      <ul  className="navbar">
        
        <li><HashLink smooth to='/#home'>Home</HashLink></li>
        <li><HashLink smooth to='/#about'>About</HashLink></li>
        <li><HashLink smooth to='/#project'>Project</HashLink></li>
        <li><HashLink smooth to='/#artwork'>Beyond Code</HashLink></li>
        <li><HashLink smooth to='/#contact'>Contact Me</HashLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
