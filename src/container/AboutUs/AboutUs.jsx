import { images } from '../../constants';


// const AboutUs = () => (
//   <div className='app__aboutus app__bg flex__center section__padding' id='about'>
//     {/* <div className='app__aboutus-overlay flex__center'>
//       <img src={images.B} alt='G_overlay' />

//     </div> */}

//     <div className='app__aboutus-content flex__center'>
//       <div className='app__aboutus-content_about'>
//         <h1 className='headtext__cormorant'>About Us</h1>
//         <img src={images.spoon} alt='about_spoon' className='spoon__img' />
//         <p className='p__opensans'>Welcome to The LB Lounge, your ultimate destination for great food, refreshing drinks, and an unforgettable experience. Nestled in the heart of Ngong, we are a vibrant bar and restaurant dedicated to serving delicious meals, top-notch beverages, and a lively atmosphere where friends and family can unwind.</p>
//         {/* <button type='button' className='custom__button'>Know More</button> */}
//       </div>

//       <div className='app__aboutus-content_knife flex__center'>
//         <img src={images.knife} alt='about_knife'/>
//       </div>

//       <div className='app__aboutus-content_history'>
//         <h1 className='headtext__cormorant'>More About Us</h1>
//         <img src={images.spoon} alt='about_spoon' className='spoon__img' />
//         <p className='p__opensans'>At The LB Lounge, we believe in creating a space where good vibes, great company, and amazing flavors come together. Whether you're here to enjoy a hearty meal, catch live football matches, or simply relax with your favorite drink, we've got you covered. Our team is passionate about hospitality, ensuring every visit is one to remember.</p>
//         {/* <button type='button' className='custom__button'>Know More</button> */}
//       </div>
//     </div>
//   </div>
// );

// export default AboutUs;


import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section" data-aos="fade-down">
      <div className="about-container">
        <div className="about-image-left">
          <img 
            src={images.inside}
            alt="Cavalli Restaurant Bar" 
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
            alt="Cavalli Bartender" 
            className="restaurant-image"
          />
        </div>
      </div>
      {/* <button className="scroll-to-top-btn" aria-label="Scroll to top">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button> */}
    </section>
  );
};

export default AboutUs;
