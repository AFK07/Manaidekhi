import React from 'react';
import './Collection.css';
import candle from './candles.jpeg';
import mold from './mold.JPG';
import extra from './extra.jpg';

const Collection = () => {
  const items = [
    { id: 1, text: 'Glass Candles', image: candle },
    { id: 2, text: 'Mold Candles', image: mold },
    { id: 3, text: 'Coming Soon....', image: extra },
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
