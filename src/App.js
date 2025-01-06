import React, { useState, useRef } from 'react';
import './App.css';
import NavBar from './Navbar/NavBar';
import Slideshow from './Slideshow/Slideshow';
import Collection from './Collection/Collection';
import Instagram from './Instagram/Instagram';

function App() {
  const [activeCategory, setActiveCategory] = useState(null); // Tracks the active category for the collection
  const collectionRef = useRef(null); // Ref to the collection section

  const handleActivateCollection = (category) => {
    setActiveCategory(category); // Activates the selected collection category

    // Scroll smoothly to the collection section
    if (collectionRef.current) {
      collectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div className="content">
        {/* Pass handleActivateCollection to NavBar */}
        <NavBar onActivateCollection={handleActivateCollection} />
        <Slideshow />
        {/* Add a ref to the Collection component */}
        <div ref={collectionRef}>
          <Collection activeCategory={activeCategory} />
        </div>
        <Instagram />
      </div>
    </div>
  );
}

export default App;

