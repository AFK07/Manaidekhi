import React from 'react';
import './Instagram.css';
import instaImage from './insta.png'; // Import the shared image

const Instagram = () => {
  // Example data for Instagram items
  const items = [
    { id: 1, image: instaImage, text: 'Post 1' },
    { id: 2, image: instaImage, text: 'Post 2' },
    { id: 3, image: instaImage, text: 'Post 3' },
    { id: 4, image: instaImage, text: 'Post 4' },
    { id: 5, image: instaImage, text: 'Post 5' },
    { id: 6, image: instaImage, text: 'Post 6' },
  ];

  return (
    <div className="instagram-container">
      <h2 className="instagram-heading">Instagram</h2>
      <div className="instagram-grid">
        {items.map((item) => (
          <div className="instagram-item" key={item.id}>
            <img src={item.image} alt={item.text} className="instagram-image" />
            <p className="instagram-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;

