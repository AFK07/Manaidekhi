import React from 'react';
import './Collection.css';
import candle from './candles.jpeg'; // Ensure the correct path to the image
import mold from './mold.JPG'; // Ensure the correct path to the image
import extra from './extra.jpg'; // Ensure the correct path to the image

const Collection = () => {
  // Example data for the collection items
  const items = [
    { id: 1, text: 'Glass Candles', image: candle }, // Default image
    { id: 2, text: 'Mold Candles', image: mold },     // New mold image
    { id: 3, text: 'Coming Soon....', image: extra }

  ];

  return (
    <div className="collection-container">
      <h2 className="collection-heading">Collection</h2>
      <div className="collection-grid">
        {items.map((item) => (
          <div className="collection-item" key={item.id}>
            <img src={item.image} alt={item.text} className="collection-image" />
            <p className="collection-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;


