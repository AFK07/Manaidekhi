import React, { useState } from 'react';
import './NavBar.css';
import logo from './logo.png';
import accountIcon from './accountIcon.png';
import basketIcon from './basketIcon.png';

const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subItemsVisible, setSubItemsVisible] = useState(null);
  const [subSubItemsVisible, setSubSubItemsVisible] = useState(null);

  const categories = {
    "Glass Candles": {
      options: ["Big Glass", "Medium Glass"],
      subOptions: {
        "Big Glass": [
          "Vanilla",
          "Strawberry Shortcake",
          "Berries",
          "Chocolate",
          "Coffee",
          "Sandalwood",
          "Mint",
          "Lemon",
          "Jasmine",
          "Cotton Candy",
          "Lemon Grass",
          "Rose",
          "Green Apple",
          "Bubble Gum",
          "Creamy Peach",
          "Mix Fruit",
          "Lavender",
        ],
        "Medium Glass": [
          "Berry Bonanza",
          "Flower Valley",
          "Purple Rain",
          "Green Apple",
          "Bubble Gum",
          "Royal Rose",
          "Eucalyptus",
          "Spa Retreat",
          "Peach Mango",
          "Cocoa Butter",
          "Fresh Linen",
          "Ocean Breeze",
        ],
      },
    },
    "Mold Candles": ["Mold Candle1", "Mold Candle2", "Mold Candle3"],
  };

  const handleShopAllClick = () => {
    setDropdownVisible(!dropdownVisible);
    setSelectedCategory(null);
    setSubItemsVisible(null);
    setSubSubItemsVisible(null);
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

  return (
    <>
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

      <div className="navbar-bottom">
        <a href="#" className="nav-link" onClick={handleShopAllClick}>
          Shop All
        </a>
        <a href="/about-us" className="nav-link">About Us</a>
        <a href="/contact-us" className="nav-link">Contact Us</a>
      </div>

      <div
  className={`dropdown ${dropdownVisible ? "dropdown-visible" : ""}`}
>
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
      categories[subItemsVisible]?.subOptions[subSubItemsVisible]?.map(
        (item, index) => (
          <div key={index} className="dropdown-sub-sub-item">
            {item}
          </div>
        )
      )}
  </div>
  {subSubItemsVisible && (
    <div className="view-all-container">
      <a href="#" className="view-all-link">
        View All
      </a>
    </div>
  )}
</div>

    </>
  );
};

export default NavBar;
