import './Navbar.css';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar' data-aos="slide-down">
      <div className='app__navbar-logo'>
        <img src={images.file} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <li className='p__opensans'><a href='#awards'>Events</a></li>
        <li className='p__opensans'><a href='#gallery'>Gallery</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='app__navbar-table_icon'>
        <img className='twirling-icon' src={images.icon2} alt='table-icon'/>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#home'>Home</a></li>
              <li className='p__opensans'><a href='#about'>About</a></li>
              <li className='p__opensans'><a href='#menu'>Menu</a></li>
              <li className='p__opensans'><a href='#awards'>Events</a></li>
              <li className='p__opensans'><a href='#gallery'>Gallery</a></li>
              <li className='p__opensans'><a href='#contact'>Contact</a></li>
            </ul>
          </div>
        )}
        

      </div>
  
    </nav>
  )
  
}

export default Navbar;
