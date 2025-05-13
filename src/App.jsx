import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { AboutUs, Founder, Events, Footer, Gallery, Header, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // animation duration in ms
      easing: 'ease-in-out', // easing style
      once: true, // whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs data-aos="fade-up" />
      <SpecialMenu data-aos="fade-up" />
      <Founder data-aos="fade-up" />
      <Events data-aos="fade-up" />
      {/* Uncomment if needed */}
      {/* <Intro data-aos="fade-up" />
      <Laurels data-aos="fade-up" />
      <Gallery data-aos="fade-up" />
      <FindUs data-aos="fade-up" /> */}
      <Footer data-aos="fade-up" />
    </div>
  );
};

export default App;
