import React from 'react';
import { Link } from 'gatsby'; // Use Gatsby's Link component
import '../css/Home.css'; // Adjust the CSS import path for Gatsby

const Home = () => {
  return (
    <div className="home-container">
      {/* Fullscreen video background */}
      <video autoPlay loop muted playsInline className="video-background">
        <source src="/video.mp4" type="video/mp4" /> {/* Place video in the `static` folder */}
        Your browser does not support the video tag.
      </video>

      {/* Content on top of the video */}
      <div className="content">
        <div className="hero-section">
          <h1>Welcome to the Gold and Silver Exchange</h1>
          <p>Your one-stop platform for tracking live prices of Gold and Silver.</p>
        </div>
        <div className="info-section">
          <div className="metal-info">
            <h2>About Gold</h2>
            <p>
              Gold is a highly sought-after precious metal that has been used for currency, jewelry, and as a symbol of wealth for centuries.
              It remains one of the most popular investment options, with its value being recognized globally.
            </p>
            <Link to="/gold" className="learn-more-button">Explore Gold Prices</Link>
          </div>

          <div className="metal-info">
            <h2>About Silver</h2>
            <p>
              Silver has been a key metal for currency, investments, and industry. It has widespread use in manufacturing, electronics, and solar energy, making it an important asset to monitor.
            </p>
            <Link to="/silver" className="learn-more-button">Explore Silver Prices</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
