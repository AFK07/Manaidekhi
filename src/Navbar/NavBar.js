import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";
import "./NavBar.css";
import logo from "./logo.png";
import accountIcon from "./accountIcon.png";
import basketIcon from "./basketIcon.png";
import { categories } from "./categories";
import insta from "./insta.png"; // Import Instagram icon
import fb from "./facebook.png"; // Import Facebook icon
import mail from "./mail.png"; // Import Mail icon

const NavBar = ({ onActivateCollection }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [contactDropdownVisible, setContactDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subItemsVisible, setSubItemsVisible] = useState(null);
  const [subSubItemsVisible, setSubSubItemsVisible] = useState(null);
  const navigate = useNavigate();

  // Toggle Shop All dropdown
  const handleShopAllClick = (e) => {
    e.preventDefault();
    setDropdownVisible((prev) => !prev);
    setContactDropdownVisible(false); // Close Contact Us dropdown
    setSelectedCategory(null);
    setSubItemsVisible(null);
    setSubSubItemsVisible(null);
  };

  // Toggle Contact Us dropdown
  const handleContactUsClick = (e) => {
    e.preventDefault();
    setContactDropdownVisible((prev) => !prev);
    setDropdownVisible(false); // Close Shop All dropdown
  };

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setSubItemsVisible(null);
      setSubSubItemsVisible(null);
    } else {
      setSelectedCategory(category);
      setSubItemsVisible(category);
      setSubSubItemsVisible(null);
    }
  };

  const handleSubCategoryClick = (subCategory) => {
    setSubSubItemsVisible(subCategory);
  };

  const handleViewAllClick = (e) => {
    e.preventDefault();
    navigate("/");
    if (onActivateCollection) {
      onActivateCollection(selectedCategory);
    }
    setDropdownVisible(false);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
        <div className="nav-center">
          <img
            src={logo}
            alt="Logo"
            className="logo-image"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          />
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

      <div className="navbar-bottom">
        <a
          href="#"
          className="nav-link"
          onClick={handleShopAllClick}
          aria-expanded={dropdownVisible}
          aria-haspopup="true"
        >
          Shop All
        </a>
        <Link to="/about-us" className="nav-link">
          About Us
        </Link>
        <a
          href="#"
          className="nav-link"
          onClick={handleContactUsClick}
          aria-expanded={contactDropdownVisible}
          aria-haspopup="true"
        >
          Contact Us
        </a>
      </div>

      {/* Shop All Dropdown */}
      <div className={`dropdown ${dropdownVisible ? "dropdown-visible" : ""}`}>
        <div className="dropdown-column">
          {Object.keys(categories).map((category) => (
            <div
              key={category}
              className={`dropdown-category ${
                selectedCategory === category ? "selected" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="dropdown-options">
          {subItemsVisible &&
            categories[subItemsVisible]?.options?.map((subCategory) => (
              <div
                key={subCategory}
                className="dropdown-sub-item"
                onClick={() => handleSubCategoryClick(subCategory)}
              >
                {subCategory}
              </div>
            ))}
        </div>
        <div className="dropdown-sub-options">
          {subSubItemsVisible &&
            categories[subItemsVisible]?.subOptions?.[subSubItemsVisible]?.map(
              (item, index) => (
                <div key={index} className="dropdown-sub-sub-item">
                  {item}
                </div>
              )
            )}
          {selectedCategory === "Mold Candles" &&
            categories["Mold Candles"]?.map((item, index) => (
              <div key={index} className="dropdown-sub-sub-item">
                {item}
              </div>
            ))}
        </div>
        {selectedCategory && (
          <div className="dropdown-view-all-right">
            <a href="#" onClick={handleViewAllClick}>
              View All
            </a>
          </div>
        )}
      </div>

      {/* Contact Us Dropdown */}
      <div className={`dropdown ${contactDropdownVisible ? "dropdown-visible" : ""}`}>
        <div className="contact-icons">
          <a
            href="https://www.instagram.com/manaidekhi.nepal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Instagram" className="contact-icon" />
          </a>
          <a
            href="https://www.facebook.com/manaidekhi.nepal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fb} alt="Facebook" className="contact-icon" />
          </a>
          <a href="mailto:dekhimanai@gmail.com">
            <img src={mail} alt="Mail" className="contact-icon" />
          </a>
        </div>
      </div>
    </>
  );
};

NavBar.propTypes = {
  onActivateCollection: PropTypes.func.isRequired,
};

export default NavBar;