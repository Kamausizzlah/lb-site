import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Founder.css';

const Founder = () => (
  <div className='app__founder app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.gallery04} alt='chef_image' />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="CEO's word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__founder-content'>
        <div className='app__founder-content_quote'>
          <img src={images.quote} alt='quote_image'/>
          <p className='p__opensans'>I wish I could change your mind and make you stay Cause</p>
        </div>
        <p className='p__opensans'>I wish I could change your mind and make you stay (stay)Your love is wicked Tears on my pillow cah your love is wicked</p>
      </div>

      <div className='app__founder-sign'>
        <p>Grace Wangari</p>
        <p className='p__opensans'>CE0 & Founder</p>
        <img src={images.sign} alt='sign_image'/>
      </div>
    </div>

  </div>
);

export default Founder;
