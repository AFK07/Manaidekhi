import React from 'react';
import NavBar from './Navbar/NavBar'; // Corrected path to NavBar component
import Slideshow from './Slideshow/Slideshow'; // Corrected path to Slideshow component
import './App.css'; // Import your main CSS file if applicable


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Other components */}
      <Slideshow />
      {/* Additional content */}
    </div>
  );
}

export default App;


