import { SubHeading } from '../../components'; 
import { images } from '../../constants';



import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Welcome to the LB Lounge"/>
      <h1 className='app__header-h1'>Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>Welcome to The LB Lounge! Bring your family and unwind in a cozy atmosphere as you enjoy sizzling nyama choma and a variety of delicious dishes from our menu. Great food, good vibes, and unforgettable moments await!</p>
      <button type='button' className='custom__button'>Explore Menu</button>

    </div>

    <div className='app__wrapper_img'>
      <img src={images.inside} alt='haeder img'/>


    </div>
  </div>
);
    
export default Header;
