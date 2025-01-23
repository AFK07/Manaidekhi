import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './Navbar/NavBar';
import Slideshow from './Slideshow/Slideshow';
import Collection from './Collection/Collection';
import Instagram from './Instagram/Instagram';
import AboutUs from './Navbar/AboutUs'; // Import the AboutUs component
import ContactUs from './Navbar/ContactUs'; // Import the ContactUs component

function AppContent() {
  const [activeCategory, setActiveCategory] = useState(null); // Tracks the active category for the collection
  const collectionRef = useRef(null); // Ref to the collection section
  const location = useLocation(); // Get the current route location

  const handleActivateCollection = (category) => {
    setActiveCategory(category); // Activates the selected collection category

    // Scroll smoothly to the collection section
    if (collectionRef.current) {
      collectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Automatically scroll to the collection section when the homepage loads
  useEffect(() => {
    if (location.pathname === '/' && activeCategory) {
      if (collectionRef.current) {
        collectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location, activeCategory]);

  return (
    <div className="App">
      <div className="content">
        {/* Pass handleActivateCollection to NavBar */}
        <NavBar onActivateCollection={handleActivateCollection} />
        <Routes>
          {/* Homepage Route */}
          <Route
            path="/"
            element={
              <>
                <Slideshow />
                <div ref={collectionRef}>
                  <Collection activeCategory={activeCategory} />
                </div>
                <Instagram />
              </>
            }
          />
          {/* About Us Route */}
          <Route path="/about-us" element={<AboutUs />} />
          {/* Contact Us Route */}
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </div>
  );
}

// Wrapper component to provide Router context
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;