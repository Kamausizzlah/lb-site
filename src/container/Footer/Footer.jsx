import { MapPin, ArrowRight } from 'lucide-react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <section className="bar-promo-section">
      <div className="overlay"></div>
      <div className="content-container">
        <h3 className="p__cormorant">THE LB LOUNGE</h3>
        
        <h1 className="headtext__cormorant">Drink . Chill . Enjoy!</h1>
        
        
        <p className="p__opensans">
          <MapPin className="icon" size={16} />
          Ngong - Suswa Road, Kimuka
        </p>
        
        <p className="phone-number">+254 704 935632</p>
        
        <a href="https://maps.app.goo.gl/bMrh3dh7uJTBEa83A" target="_blank" rel="noopener noreferrer" className="maps-button">
          VIEW IN GOOGLE MAPS
          <ArrowRight className="icon" size={16} />
        </a>
        
        <div className="social-links">
          <a href="#" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/the_lb.lounge?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        
        <p className="p__opensans">
          THE MANAGEMENT RESERVES THE RIGHT OF ADMISSION. FOOD AND DRINKS FROM OUTSIDE, FIREARMS NOT ALLOWED
        </p>
      </div>
    </section>
  );
};

export default Footer;