import React from 'react';
import './Collection.css';
import oneImage from './one.png'; // Ensure the correct path to the image
import mold from './mold.png'; // Ensure the correct path to the image

const Collection = () => {
  // Example data for the collection items
  const items = [
    { id: 1, text: 'Item 1', image: oneImage }, // Default image
    { id: 2, text: 'Item 2', image: mold },     // New mold image
    { id: 3, text: 'Item 3', image: oneImage },
    { id: 4, text: 'Item 4', image: oneImage },
    { id: 5, text: 'Item 5', image: oneImage },
    { id: 6, text: 'Item 6', image: oneImage },
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


