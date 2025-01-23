import React, { useRef, useEffect } from 'react';
import './AboutUs.css'; // Import the CSS file
import ManaidekhiVideo from './Manaidekhi.mp4'; // Import the video

const AboutUs = () => {
  const videoRef = useRef(null); // Create a ref for the video element

  useEffect(() => {
    // Attempt to autoplay the video with sound when the component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Autoplay with sound failed:', error);
        // Fallback: Mute the video and try autoplay again
        videoRef.current.muted = true;
        videoRef.current.play();
      });
    }
  }, []);

  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        I am Grishma, a dynamic leader who values authority and strives for excellence. Feedback and guidance are essential to me, and I believe in both giving and receiving them. I am forward-thinking, ambitious, and determined to achieve my goals, and I deeply admire and respect nature. My desire to contribute to it drives me to participate in various learning and development platforms that allow me to grow, flourish, and become an admirable individual. As a Development Studies student, I aspire to make a valuable contribution to my well-being and the environment around me. I am the founder of MaanaiDekhi Nepal, a small business specializing in custom-made scented candles, providing a few job opportunities. I'm incredibly passionate about assisting those in need and making the world a brighter and more inclusive place.
      </p>
      {/* Add the video */}
      <div className="video-container">
        <video
          ref={videoRef} // Attach the ref to the video element
          controls
          autoPlay
          loop
          className="about-us-video"
        >
          <source src={ManaidekhiVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default AboutUs;