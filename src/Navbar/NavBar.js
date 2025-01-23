import React, { useState } from "react";
import PropTypes from "prop-types"; // Add PropTypes
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link
import "./NavBar.css";
import logo from "./logo.png";
import accountIcon from "./accountIcon.png";
import basketIcon from "./basketIcon.png";
import { categories } from "./categories"; // Import categories from a separate file

const NavBar = ({ onActivateCollection }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subItemsVisible, setSubItemsVisible] = useState(null);
  const [subSubItemsVisible, setSubSubItemsVisible] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleShopAllClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setDropdownVisible((prev) => !prev); // Toggle the dropdown visibility
    setSelectedCategory(null); // Reset category selection
    setSubItemsVisible(null); // Reset subcategory selection
    setSubSubItemsVisible(null); // Reset sub-subcategory selection
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
    e.preventDefault(); // Prevent default anchor behavior

    // Navigate to the homepage
    navigate("/");

    // Activate the selected collection category
    if (onActivateCollection) {
      onActivateCollection(selectedCategory);
    }

    // Close the dropdown
    setDropdownVisible(false);
  };

  // Function to handle logo click and navigate to the homepage
  const handleLogoClick = () => {
    navigate("/"); // Navigate to the homepage
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
        <div className="nav-center">
          {/* Make the logo clickable */}
          <img
            src={logo}
            alt="Logo"
            className="logo-image"
            onClick={handleLogoClick} // Add onClick handler
            style={{ cursor: "pointer" }} // Change cursor to pointer to indicate it's clickable
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
        {/* Replace <a> with <Link> for smooth navigation */}
        <Link to="/about-us" className="nav-link">
          About Us
        </Link>
        <Link to="/contact-us" className="nav-link">
          Contact Us
        </Link>
      </div>

      {/* Dropdown for Shop All */}
      <div className={`dropdown ${dropdownVisible ? "dropdown-visible" : ""}`}>
        <button
          className="dropdown-close-button"
          onClick={() => setDropdownVisible(false)}
        >
          X
        </button>
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
    </>
  );
};

NavBar.propTypes = {
  onActivateCollection: PropTypes.func.isRequired,
};

export default NavBar;