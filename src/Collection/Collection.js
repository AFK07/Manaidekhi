import React, { useState, useRef } from 'react';
import './Collection.css';
import candle from './candles.jpeg';
import mold from './mold.JPG';
import extra from './extra.jpg';
// Image Imports
import vanilla from './vanilla.jpeg';
import strawberryShortcake from './strawberry.jpeg';
import berries from './berries.jpeg';
import chocolate from './chocolate.jpeg';
import coffee from './coffee.jpeg';
import mint from './mint.jpeg';
import jasmine from './jasmine.jpeg';
import rose from './rose.jpeg';
import lemon from './lemon.jpeg';
import lavender from './lavender.jpeg';
import sandalwood from './sandalwood.jpeg';
import greenApple from './greenapple.jpeg';
import berryBonanza from './berrybonanza.jpeg';
import flowerValley from './flowervalley.jpeg';
import purpleRain from './purplerain.jpeg';
import bubbleGum from './bubblegum.jpeg';
import royalRose from './royalrose.jpeg';
import eucalyptus from './eucaluptus.jpeg';
import spaRetreat from './sparetreat.jpeg';
import peachMango from './peachmango.jpeg';
import cocoaButter from './cocoabutter.jpeg';


const Collection = () => {
  const [showGlassRow, setShowGlassRow] = useState(false);
  const glassRowRef = useRef(null);

  const items = [
    { id: 1, text: 'Glass Candles', image: candle },
    { id: 2, text: 'Mold Candles', image: mold },
    { id: 3, text: 'Coming Soon....', image: extra },
  ];

  const glassItems = [
    { id: 1, image: vanilla, text: 'Vanilla' },
    { id: 2, image: strawberryShortcake, text: 'Strawberry Shortcake' },
    { id: 3, image: berries, text: 'Berries' },
    { id: 4, image: chocolate, text: 'Chocolate' },
    { id: 5, image: coffee, text: 'Coffee' },
    { id: 6, image: mint, text: 'Mint' },
    { id: 7, image: jasmine, text: 'Jasmine' },
    { id: 8, image: rose, text: 'Rose' },
    { id: 9, image: lemon, text: 'Lemon' },
    { id: 10, image: lavender, text: 'Lavender' },
    { id: 11, image: sandalwood, text: 'Sandalwood' },
    { id: 12, image: greenApple, text: 'Green Apple' },
    { id: 13, image: berryBonanza, text: 'Berry Bonanza' },
    { id: 14, image: flowerValley, text: 'Flower Valley' },
    { id: 15, image: purpleRain, text: 'Purple Rain' },
    { id: 16, image: bubbleGum, text: 'Bubble Gum' },
    { id: 17, image: royalRose, text: 'Royal Rose' },
    { id: 18, image: eucalyptus, text: 'Eucalyptus' },
    { id: 19, image: spaRetreat, text: 'Spa Retreat' },
    { id: 20, image: peachMango, text: 'Peach Mango' },
    { id: 21, image: cocoaButter, text: 'Cocoa Butter' }
  ];

  const handleWheelScroll = (event) => {
    if (glassRowRef.current && event.deltaY !== 0) {
      event.preventDefault(); // Prevent vertical scrolling
      glassRowRef.current.scrollLeft += event.deltaY; // Scroll horizontally
    }
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
          onWheel={handleWheelScroll}
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