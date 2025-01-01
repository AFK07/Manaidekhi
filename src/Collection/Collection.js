import React from 'react';
import './Collection.css';

const Collection = () => {
  // Example data for the collection items
  const items = [
    { id: 1, image: 'path/to/image1.png', text: 'Item 1' },
    { id: 2, image: 'path/to/image2.png', text: 'Item 2' },
    { id: 3, image: 'path/to/image3.png', text: 'Item 3' },
    { id: 4, image: 'path/to/image4.png', text: 'Item 4' },
    { id: 5, image: 'path/to/image5.png', text: 'Item 5' },
    { id: 6, image: 'path/to/image6.png', text: 'Item 6' },
    
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
