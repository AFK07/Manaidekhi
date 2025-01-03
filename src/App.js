import React from 'react';
import './App.css';
import NavBar from './Navbar/NavBar';
import Slideshow from './Slideshow/Slideshow';
import Collection from './Collection/Collection';
import Instagram from './Instagram/Instagram';

function App() {
  return (
    <div className="App">
      <div className="content">
        <NavBar />
        <Slideshow />
        <Collection />
        <Instagram />
      </div>
    </div>
  );
}

export default App;

