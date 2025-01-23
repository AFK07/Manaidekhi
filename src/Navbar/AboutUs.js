import React from 'react';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        I am Grishma, a dynamic leader who values authority and strives for excellence. Feedback and guidance are essential to me, and I believe in both giving and receiving them. I am forward-thinking, ambitious, and determined to achieve my goals, and I deeply admire and respect nature. My desire to contribute to it drives me to participate in various learning and development platforms that allow me to grow, flourish, and become an admirable individual. As a Development Studies student, I aspire to make a valuable contribution to my well-being and the environment around me. I am the founder of MaanaiDekhi Nepal, a small business specializing in custom-made scented candles, providing a few job opportunities. I'm incredibly passionate about assisting those in need and making the world a brighter and more inclusive place.
      </p>
      {/* Add the YouTube video */}
      <div className="video-container">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/8lnDZFTyI8E"
          title="About MaanaiDekhi"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="about-us-video"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;