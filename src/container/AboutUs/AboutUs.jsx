import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section" data-aos="fade-down" id='about'>
      <div className="about-container">
        <div className="about-image-left">
          <img 
            src={images.inside}
            alt="The LB Restaurant Bar" 
            className="restaurant-image"
          />
        </div>
        
        <div className="about-content">
          <h3 className="about-subtitle">WHY THE LB LOUNGE?</h3>
          <h2 className="headtext__cormorant">About Us</h2>
          <p className="about-description">
            At The LB Lounge, we believe in creating a space where good vibes, great company, and amazing flavors come together. Whether you&apos;re here to enjoy a hearty meal, catch live football matches, or simply relax with your favorite drink, we&apos;ve got you covered. Our team is passionate about hospitality, ensuring every visit is one to remember.
          </p>
        </div>
        
        <div className="about-image-right">
          <img 
            src={images.gallery02} 
            alt="LB Food" 
            className="restaurant-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
