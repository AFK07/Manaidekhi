import React, { useState, useRef } from 'react';
import './Collection.css';
import candle from './candles.jpeg';
import mold from './mold.JPG';
import extra from './extra.jpg';
import glass1 from './candles.jpeg'; // Add sample glass candle images
import glass2 from './candles.jpeg';
import glass3 from './candles.jpeg';
import glass4 from './candles.jpeg';

const Collection = () => {
  const [showGlassRow, setShowGlassRow] = useState(false);
  const glassRowRef = useRef(null);

  const items = [
    { id: 1, text: 'Glass Candles', image: candle },
    { id: 2, text: 'Mold Candles', image: mold },
    { id: 3, text: 'Coming Soon....', image: extra },
  ];

  const glassItems = [
    { id: 1, image: glass1, text: 'Vanilla' },
    { id: 2, image: glass2, text: 'Strawberry Shortcake' },
    { id: 3, image: glass3, text: 'Berries' },
    { id: 4, image: glass4, text: 'Chocolate' },
    { id: 5, image: glass1, text: 'Coffee' },
    { id: 6, image: glass2, text: 'Mint' },
    { id: 7, image: glass3, text: 'Jasmine' },
    { id: 8, image: glass4, text: 'Rose' },
    { id: 9, image: glass1, text: 'Lemon' },
    { id: 10, image: glass2, text: 'Lavender' },
    { id: 11, image: glass3, text: 'Sandalwood' },
    { id: 12, image: glass4, text: 'Green Apple' },
  ];

  const handleMouseDown = (e) => {
    const container = glassRowRef.current;
    container.isDown = true;
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeftStart = container.scrollLeft;
    container.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    const container = glassRowRef.current;
    if (!container.isDown) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - container.startX) * 2; // Adjust scrolling speed
    container.scrollLeft = container.scrollLeftStart - walk;
  };

  const handleMouseUpLeave = () => {
    const container = glassRowRef.current;
    container.isDown = false;
    container.style.cursor = 'grab';
  };

  return (
    <div className="collection-container">
      <h2 className="collection-heading">Collection</h2>
      <div className="collection-grid">
        {items.map((item) => (
          <div className="collection-item" key={item.id}>
            <img src={item.image} alt={item.text} className="collection-image" />
            <p
              className="collection-text"
              onClick={() => {
                if (item.text === 'Glass Candles') setShowGlassRow(!showGlassRow);
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {showGlassRow && (
        <div
          className="glass-scroll-container"
          ref={glassRowRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpLeave}
          onMouseLeave={handleMouseUpLeave}
        >
          <div className="glass-row-scroll">
            {glassItems.map((glass) => (
              <div key={glass.id} className="glass-item">
                <img src={glass.image} alt={glass.text} className="glass-image" />
                <p className="glass-text">{glass.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
