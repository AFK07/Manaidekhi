import React from 'react';
import './App.css'; // Add styles for the background video
import NavBar from './Navbar/NavBar';
import Slideshow from './Slideshow/Slideshow';
import Collection from './Collection/Collection';
import Instagram from './Instagram/Instagram';
import backvid from './backvid.mp4'; // Import the background video

function App() {
  return (
    <div className="App">
      {/* Background Video */}
      {/* <video autoPlay muted loop className="background-video">
        <source src={backvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Content */}
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
