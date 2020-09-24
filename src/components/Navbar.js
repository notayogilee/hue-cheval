import React from 'react';
import './Navbar.scss';
import logo from '../img/HueChevalTransparent.png';

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="nav-list">
        <ul>
          <li><a to="/about" className="text">
            à propos</a></li>
          <li><a to="/videos" className="text">
            practiquons</a></li>
          <li><a to="/contact" className="text">connectons</a></li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;
