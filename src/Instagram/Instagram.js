import React from 'react';
import './Instagram.css';
import insta from './insta.png';
import post1 from './post1.png';
import post2 from './post2.jpg';
import post3 from './post3.jpg';
import post4 from './post4.jpeg';

const Instagram = () => {
  const items = [
    { id: 1, baseImage: post1, hoverImage: insta, text: 'Post 1', link: 'https://www.instagram.com/reel/DBVW4z2tk_R/' },
    { id: 2, baseImage: post2, hoverImage: insta, text: 'Post 2', link: 'https://www.instagram.com/reel/C70XtF3S-7f/' },
    { id: 3, baseImage: post3, hoverImage: insta, text: 'Post 3', link: 'https://www.instagram.com/reel/C6WNKMLt_tQ/' },
    { id: 4, baseImage: post4, hoverImage: insta, text: 'Post 4', link: 'https://www.instagram.com/reel/DDNCHNFOgBj/' },
  ];

  return (
    <div className="instagram-container">
      <h2 className="instagram-heading">Follow us on Instagram!</h2>
      <div className="instagram-grid">
        {items.map((item) => (
          <div className="instagram-item" key={item.id}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.baseImage} alt={item.text} className="base-image" />
              <img src={item.hoverImage} alt="Instagram" className="instagram-image" />
            </a>
            <p className="instagram-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;

