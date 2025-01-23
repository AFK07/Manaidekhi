import React, { useState, useEffect, useRef } from 'react';
import './Collection.css';
import candle from './candles.jpeg';
import mold from './mold.JPG';
import extra from './extra.jpg';
// Glass Candle Images
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
import bubbleGum from './bubblegum.jpeg';
import royalRose from './royalrose.jpeg';
import eucalyptus from './eucaluptus.jpeg';
import spaRetreat from './sparetreat.jpeg';
import peachMango from './peachmango.jpeg';
import cocoaButter from './cocoabutter.jpeg';
// Mold Candle Images
import roselove from './roselove.JPG';
import couple from './couple.JPG';
import body from './body.JPG';
import cakesmall from './cakesmall.jpg';
import peony from './peony.jpg';
import cheesestack from './cheesestack.JPG';
import owl from './owl.JPG';
import hug from './hug.JPG';
import smallbubble from './smallbubble.JPG';
import bigbubble from './bigbubble.JPG';
import cupcake from './cupcake.JPG';
import floralpillar from './floralpillar.webp';

const Collection = ({ activeCategory, selectedItem }) => {
  const [showRow, setShowRow] = useState({ glass: false, mold: false });
  const [animateClass, setAnimateClass] = useState('');
  const itemRefs = useRef({});

  useEffect(() => {
    if (activeCategory === 'Glass Candles') {
      setShowRow({ glass: true, mold: false });
    } else if (activeCategory === 'Mold Candles') {
      setShowRow({ glass: false, mold: true });
    }
  }, [activeCategory]);

  useEffect(() => {
    if (selectedItem && itemRefs.current[selectedItem]) {
      itemRefs.current[selectedItem].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedItem]);

  const items = [
    { id: 1, text: 'Glass Candles', image: candle, type: 'glass' },
    { id: 2, text: 'Mold Candles', image: mold, type: 'mold' },
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
    { id: 15, image: bubbleGum, text: 'Bubble Gum' },
    { id: 16, image: royalRose, text: 'Royal Rose' },
    { id: 17, image: eucalyptus, text: 'Eucalyptus' },
    { id: 18, image: spaRetreat, text: 'Spa Retreat' },
    { id: 19, image: peachMango, text: 'Peach Mango' },
    { id: 20, image: cocoaButter, text: 'Cocoa Butter' },
  ];

  const moldItems = [
    { id: 1, image: roselove, text: 'Rose Love' },
    { id: 2, image: couple, text: 'Couple' },
    { id: 3, image: body, text: 'Body Sculptures' },
    { id: 4, image: cakesmall, text: 'Cake Candles' },
    { id: 5, image: peony, text: 'Peony' },
    { id: 6, image: cheesestack, text: 'Cheese Stack' },
    { id: 7, image: owl, text: 'Owl Candles' },
    { id: 8, image: hug, text: 'Hug Candles' },
    { id: 9, image: smallbubble, text: 'Small Bubble Candles' },
    { id: 10, image: bigbubble, text: 'Big Bubble Candles' },
    { id: 11, image: cupcake, text: 'Cupcake Candles' },
    { id: 12, image: floralpillar, text: 'Floral Pillar' },
  ];

  const handleRowToggle = (type) => {
    if (showRow[type]) {
      setAnimateClass('animate-reverse');
      setTimeout(() => {
        setShowRow({ ...showRow, [type]: false });
        setAnimateClass('');
      }, (type === 'glass' ? glassItems : moldItems).length * 100 + 500);
    } else {
      setAnimateClass('animate-forward');
      setShowRow({ ...showRow, [type]: true });
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
              onClick={() => handleRowToggle(item.type)}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {showRow.glass && (
        <div className={`scroll-container ${animateClass}`}>
          <div className="row-scroll">
            {glassItems.map((glass) => (
              <div
                key={glass.id}
                className="item"
                ref={(el) => (itemRefs.current[glass.text] = el)}
              >
                <img src={glass.image} alt={glass.text} className="item-image" />
                <p className="item-text">{glass.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {showRow.mold && (
        <div className={`scroll-container ${animateClass}`}>
          <div className="row-scroll">
            {moldItems.map((mold) => (
              <div
                key={mold.id}
                className="item"
                ref={(el) => (itemRefs.current[mold.text] = el)}
              >
                <img src={mold.image} alt={mold.text} className="item-image" />
                <p className="item-text">{mold.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
