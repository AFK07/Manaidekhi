import React, { useState } from 'react';
import './App.css';
import NavBar from './Navbar/NavBar';
import Slideshow from './Slideshow/Slideshow';
import Collection from './Collection/Collection';
import Instagram from './Instagram/Instagram';

function App() {
  const [activeCategory, setActiveCategory] = useState(null); // Tracks the active category for the collection

  const handleActivateCollection = (category) => {
    setActiveCategory(category); // Activates the selected collection category
  };

  return (
    <div className="App">
      <div className="content">
        {/* Pass handleActivateCollection to NavBar */}
        <NavBar onActivateCollection={handleActivateCollection} />
        <Slideshow />
        {/* Pass activeCategory to Collection */}
        <Collection activeCategory={activeCategory} />
        <Instagram />
      </div>
    </div>
  );
}

export default App;


