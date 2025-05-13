import './SpecialMenu.css';

const SpecialMenu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1>Food Menu</h1>
      </div>
      <div className="menu-section" data-aos="fade-down">
        <div className="menu-column">
          <div className="menu-category">
            <h2 className="category-title">ON THE GRILL</h2>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">MBUZI CHOMA</span>
                <span className="item-description">1Kg</span>
              </div>
              <span className="item-price">1,700</span>
            </div>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">THE LB SPECIAL CHOMA</span>
              </div>
              <span className="item-price">2,000</span>
            </div>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">CAPON CHOMA FULL</span>
              </div>
              <span className="item-price">1,500</span>
            </div>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">CHAR-GRILLED NILE PERCH</span>
              </div>
              <span className="item-price">1,800</span>
            </div>
          </div>

          <div className="menu-category">
            <h2 className="category-title">CHEFS SELECTION</h2>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">MBUZI</span>
                <span className="item-description">1Kg Wet/Dry Fry</span>
              </div>
              <span className="item-price">1,800</span>
            </div>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">PORK</span>
                <span className="item-description">1Kg Wet/Dry Fry</span>
              </div>
              <span className="item-price">1,600</span>
            </div>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">BEEF</span>
                <span className="item-description">1Kg Wet/Dry Fry</span>
              </div>
              <span className="item-price">1,500</span>
            </div>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">CHICKEN</span>
                <span className="item-description">1Kg Wet/Dry Fry</span>
              </div>
              <span className="item-price">2,000</span>
            </div>
          </div>
        </div>

        <div className="menu-column">
          <div className="menu-category">
            <h2 className="category-title">BITINGS</h2>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">A PAIR OF SAMOSAS</span>
              </div>
              <span className="item-price">200</span>
            </div>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">BEEF SAUSAGES POTION</span>
              </div>
              <span className="item-price">200</span>
            </div>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">CHOMA SAUSAGES POTION</span>
              </div>
              <span className="item-price">300</span>
            </div>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">CHICKEN WINGS</span>
              </div>
              <span className="item-price">700</span>
            </div>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">FISH FINGERS</span>
              </div>
              <span className="item-price">700</span>
            </div>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">CHICKEN NUGGETS</span>
              </div>
              <span className="item-price">700</span>
            </div>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">HOTDOG</span>
              </div>
              <span className="item-price">250</span>
            </div>
          </div>

          <div className="menu-category">
            <h2 className="category-title">ACCOMPANIMENTS</h2>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">FRENCH FRIES</span>
              </div>
              <span className="item-price">200</span>
            </div>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">UGALI</span>
              </div>
              <span className="item-price">100</span>
            </div>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">MASALA CHIPS</span>
              </div>
              <span className="item-price">350</span>
            </div>
          </div>
        </div>
        <div className='menu-column'>
          <div className="menu-category">
            <h2 className="category-title">PLATTERS</h2>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">LB ZONE <span className="serves-label">SERVES 5</span></span>
                <span className="item-description">1/2 meal options Chicken, Short Ribs and Mbuzi served with either Sautéed Potatoes or French Fries & Kachumbari</span>
              </div>
              <span className="item-price">3,500</span>
            </div>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">BAHATI BUKUKU <span className="serves-label">SERVES 4</span></span>
                <span className="item-description">A mix of full Kienyeji fried chicken with corn, nduma, chips and boiled eggs</span>
              </div>
              <span className="item-price">2,800</span>
            </div>
            <div className="menu-item">
              <div className="item-info">
                <span className="item-name">CAVALLI BITINGS PLATTER <span className="serves-label">SERVES 2</span></span>
                <span className="item-description">4 Beef sausages, 4 samosas, 6 chicken wings/lollipop, 4 chicken nuggets and carbonara fries.</span>
              </div>
              <span className="item-price">2,200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;