import React from 'react';
import './Instagram.css';
import one from './one.png';
import insta from './insta.png';

const Instagram = () => {
  // Example data for Instagram items
  const items = [
    { id: 1, baseImage: one, hoverImage: insta, text: 'Post 1' },
    { id: 2, baseImage: one, hoverImage: insta, text: 'Post 2' },
    { id: 3, baseImage: one, hoverImage: insta, text: 'Post 3' },
    { id: 4, baseImage: one, hoverImage: insta, text: 'Post 4' },
    { id: 5, baseImage: one, hoverImage: insta, text: 'Post 5' },
    { id: 6, baseImage: one, hoverImage: insta, text: 'Post 6' },
  ];

  return (
    <div className="instagram-container">
      <h2 className="instagram-heading">Follow us on Instagram!</h2>
      <div className="instagram-grid">
        {items.map((item) => (
          <div className="instagram-item" key={item.id}>
            <img src={item.baseImage} alt={item.text} className="base-image" />
            <img src={item.hoverImage} alt="Instagram" className="instagram-image" />
            <p className="instagram-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;


