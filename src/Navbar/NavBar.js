import React from 'react';
import './NavBar.css';
import logo from './logo.png';
import accountIcon from './accountIcon.png'; // Correct path to account icon
import basketIcon from './basketIcon.png';   // Correct path to basket icon

const NavBar = () => {
  return (
    <>
      {/* Top Row */}
      <nav className="navbar">
        <div className="nav-left">
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
        <div className="nav-center">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <div className="nav-right">
          <button className="nav-button">
            <img src={accountIcon} alt="Account" className="icon-image" />
          </button>
          <button className="nav-button">
            <img src={basketIcon} alt="Basket" className="icon-image" />
          </button>
        </div>
      </nav>

      {/* Bottom Row */}
      <div className="navbar-bottom">
        <a href="/shop-all" className="nav-link">Shop All</a>
        <a href="/about-us" className="nav-link">About Us</a>
        <a href="/contact-us" className="nav-link">Contact Us</a>
      </div>
    </>
  );
};

export default NavBar;

