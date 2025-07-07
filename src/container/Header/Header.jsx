import { images } from '../../constants';
import { meal } from '../../constants';

import './Header.css'

const Header = () => {
  return (
    <div className="lb-container" id='#home'>

      {/* Background video */}
      <video 
        className="background-video" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src={meal} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="lb-header">
      
        <div className="logo-container">
          <a href="home" className="logo-link">
            <img 
              src={images.file} 
              alt="lb-logo" 
              className="logo" 
            />
          </a>
        </div>
      </div>
      
      <div className="hero-content">
        <h1 className="welcome-text">
          Welcome to
          <div className="brand-name">
            <span className="manor-text">The</span> LB <span className="lb-text">Lounge</span>
          </div>
        </h1>
        
        <div className="tagline">
          <span>DRINK</span>
          <span className="dot">.</span>
          <span>DANCE</span>
          <span className="dot">.</span>
          <span>DINE</span>
        </div>
        
        <div className="opening-hours">
          <span className="clock-icon">⏱</span>
          <span>Opening Hours: 12:00 - 03:00</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
