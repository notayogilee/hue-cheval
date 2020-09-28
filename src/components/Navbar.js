import React, { useEffect } from 'react';
import './Navbar.scss';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import logo from '../img/HueChevalTransparent.png';

const Navbar = () => {
  useEffect(() => {
    let elems = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elems, {
      throttle: 10,
      activeClass: "active",
      scrollOffset: 300
    });
  });

  return (
    <div id="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="items">
        <ul>
          <li className="item"><a href="#main">Signalétique</a></li>
          <li className="item"><a href="#beer">Boldwin</a></li>
          <li className="item"><a href="#alphabet">Alphabet</a></li>
        </ul>
      </div>
    </div>
  )
};

export default Navbar;
