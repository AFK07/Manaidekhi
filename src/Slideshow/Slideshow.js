import React from 'react';
import './Slideshow.css';
import slide3 from './slideshow3.png';

const Slideshow = () => {
  return (
    <div className="slide-container">
      <div className="each-slide">
        <img src={slide3} alt="Slide 1" className="slide-image" />
        <button className="slide-button">Shop Now</button>
      </div>
    </div>
  );
};

export default Slideshow;


