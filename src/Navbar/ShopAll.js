import React from "react";
import "./NavBar.css";

const ShopAll = ({
  selectedCategory,
  subItemsVisible,
  subSubItemsVisible,
  setSelectedCategory,
  setSubItemsVisible,
  setSubSubItemsVisible,
  setDropdownVisible,
  onActivateCollection,
  onItemSelected,
}) => {
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
        ],
      },
    },
    "Mold Candles": [
      "Daisy",
      "Owl",
      "Cactus",
      "Cake Small",
      "Cupcake",
      "Cheese Stack",
      "Peony",
      "Body",
      "Small Bubble",
      "Rose Love",
      "Couple",
      "Cube Love",
      "Big Bubble",
      "Cake",
      "Hug",
      "Floral Pillar",
      "Christmas Pillar & Christmas Ball",
    ],
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

  const handleItemClick = (item) => {
    if (onItemSelected) onItemSelected(item);
  };

  const handleViewAllClick = () => {
    if (onActivateCollection) onActivateCollection(selectedCategory);
    setDropdownVisible(false); // Close the dropdown
  };

  return (
    <div className="dropdown">
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
              <div
                key={index}
                className="dropdown-sub-sub-item"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </div>
            )
          )}
        {selectedCategory === "Mold Candles" &&
          categories["Mold Candles"]?.map((item, index) => (
            <div
              key={index}
              className="dropdown-sub-sub-item"
              onClick={() => handleItemClick(item)}
            >
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
  );
};

export default ShopAll;