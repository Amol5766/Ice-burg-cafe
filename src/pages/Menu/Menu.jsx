import React, { useState, useRef, useEffect } from 'react';
import './Menu.css'; // Updated to link to menu.css
import { FiX } from "react-icons/fi"; // Importing close icons
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaPepperHot, FaLeaf, FaDrumstickBite, FaEgg } from 'react-icons/fa'; // Importing required icons
import { GiHeartburn } from 'react-icons/gi'; // Correct import for GiHeartburn
import video from '../../assets/Untitled v.mp4';
import CardH from '../../components/horizontalMenuItem/HorizontalMenuItem'; // Import the horizontal menu card
import PaymentSection from '../../components/PaymentSection/PaymentSection'; // Adjust the import path as needed



const Menu = () => {
  const [showVeg, setShowVeg] = useState(false);
  const [showNonVeg, setShowNonVeg] = useState(false);
  const [showSection1, setShowSection1] = useState(false);
  const [showSection2, setShowSection2] = useState(false);
  const [showSection3, setShowSection3] = useState(false);
  const [showSection4, setShowSection4] = useState(false);
  const [showSection5, setShowSection5] = useState(false);
  const [showSection6, setShowSection6] = useState(false);
  const [showSection7, setShowSection7] = useState(false);
  const [showSection8, setShowSection8] = useState(false);
  const [showSection9, setShowSection9] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const [vegVisible, setVegVisible] = useState(false);
  const [nonVegVisible, setNonVegVisible] = useState(false);
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);
  const [section5Visible, setSection5Visible] = useState(false);
  const [section6Visible, setSection6Visible] = useState(false);
  const [section7Visible, setSection7Visible] = useState(false);
  const [section8Visible, setSection8Visible] = useState(false);
  const [section9Visible, setSection9Visible] = useState(false);


  const dropdownRef = useRef(null);
  const vegSectionRef = useRef(null);
  const nonVegSectionRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  const section8Ref = useRef(null);
  const section9Ref = useRef(null);


  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === vegSectionRef.current) setVegVisible(true);
          if (entry.target === nonVegSectionRef.current) setNonVegVisible(true);
          if (entry.target === section1Ref.current) setSection1Visible(true);
          if (entry.target === section2Ref.current) setSection2Visible(true);
          if (entry.target === section3Ref.current) setSection3Visible(true);
          if (entry.target === section4Ref.current) setSection4Visible(true);
          if (entry.target === section5Ref.current) setSection5Visible(true);
          if (entry.target === section6Ref.current) setSection6Visible(true);
          if (entry.target === section7Ref.current) setSection7Visible(true);
          if (entry.target === section8Ref.current) setSection8Visible(true);
          if (entry.target === section9Ref.current) setSection9Visible(true);
        }
      });
    }, { threshold: 0.1 });
  
    if (vegSectionRef.current) observer.observe(vegSectionRef.current);
    if (nonVegSectionRef.current) observer.observe(nonVegSectionRef.current);
    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (section4Ref.current) observer.observe(section4Ref.current);
    if (section5Ref.current) observer.observe(section5Ref.current);
    if (section6Ref.current) observer.observe(section6Ref.current);
    if (section7Ref.current) observer.observe(section7Ref.current);
    if (section8Ref.current) observer.observe(section8Ref.current);
    if (section9Ref.current) observer.observe(section9Ref.current);
  
    return () => {
      if (vegSectionRef.current) observer.unobserve(vegSectionRef.current);
      if (nonVegSectionRef.current) observer.unobserve(nonVegSectionRef.current);
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
      if (section3Ref.current) observer.unobserve(section3Ref.current);
      if (section4Ref.current) observer.unobserve(section4Ref.current);
      if (section5Ref.current) observer.unobserve(section5Ref.current);
      if (section6Ref.current) observer.unobserve(section6Ref.current);
      if (section7Ref.current) observer.unobserve(section7Ref.current);
      if (section8Ref.current) observer.unobserve(section8Ref.current);
      if (section9Ref.current) observer.unobserve(section9Ref.current);

    };
  }, []);

  const toggleVegetarian = () => setShowVeg((prev) => !prev);
  const toggleNonVegetarian = () => setShowNonVeg((prev) => !prev);
  const toggleSection1 = () => setShowSection1((prev) => !prev);
  const toggleSection2 = () => setShowSection2((prev) => !prev);
  const toggleSection3 = () => setShowSection3((prev) => !prev);
  const toggleSection4 = () => setShowSection4((prev) => !prev);
  const toggleSection5 = () => setShowSection5((prev) => !prev);
  const toggleSection6 = () => setShowSection6((prev) => !prev);
  const toggleSection7 = () => setShowSection7((prev) => !prev);
  const toggleSection8 = () => setShowSection8((prev) => !prev);
  const toggleSection9 = () => setShowSection9((prev) => !prev);

  return (
    <div className="menu-page">
      {/* Hero Video */}
      <div className="hero-video-container">
        <video autoPlay loop >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="hero-title">Our Menu</h1>
      </div>

      {/* Categories Header */}
      <div className="categories-header">
        <h1>CATEGORIES</h1>
      </div>

      {/* Fixed Dropdown Button */}
      <div className="fixed-menu-button" onClick={() => setShowDropdown(!showDropdown)}>
        {showDropdown ? <FiX size={40} /> : <BiSolidFoodMenu size={40} />}
      </div>

      {showDropdown && (
  <div className="dropdown-menu scrollable-dropdown">
    <div className="dropdown-item" onClick={() => { toggleVegetarian(); scrollToSection(vegSectionRef); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Beverages {showVeg ? '▲' : '▼'} (8)
    </div>
    <div className="dropdown-item" onClick={() => { toggleNonVegetarian(); scrollToSection(nonVegSectionRef); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Snacks {showNonVeg ? '▲' : '▼'} (5)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection1(); scrollToSection(section1Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
     Burgers   {showSection1 ? '▲' : '▼'} (3)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection2(); scrollToSection(section2Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Sandwich {showSection2 ? '▲' : '▼'} (13)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection3(); scrollToSection(section3Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Manchurian {showSection3 ? '▲' : '▼'} (3)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection4(); scrollToSection(section4Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Rice {showSection4 ? '▲' : '▼'} (2)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection5(); scrollToSection(section5Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Noodles  {showSection5 ? '▲' : '▼'} (10)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection6(); scrollToSection(section6Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Momos {showSection6 ? '▲' : '▼'} (13)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection7(); scrollToSection(section7Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Milkshakes {showSection7 ? '▲' : '▼'} (2)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection8(); scrollToSection(section8Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      mojitos {showSection8 ? '▲' : '▼'} (8)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection9(); scrollToSection(section9Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Dessert scoops {showSection9 ? '▲' : '▼'} (19)
    </div>

  </div>
)}


      {/* Horizontal Icon Buttons - Infinite Slider */}
      <div className="infinite-slider-wrapper">
        <div className="infinite-slider">
          <button className="icon-button">
            <FaPepperHot size={30} color='#e63946' />
            <span>Spicy</span>
          </button>
          <button className="icon-button">
            <FaLeaf size={30} color='#4caf50'/>
            <span>Vegetarian</span>
          </button>
          <button className="icon-button">
            <FaDrumstickBite size={30} color='#ea7900'/>
            <span>Non-Veg</span>
          </button>
          <button className="icon-button">
            <FaEgg size={30} color='#ffeb3b'/>
            <span>Eggs</span>
          </button>
          <button className="icon-button">
            <GiHeartburn size={30} color='#b52cbf'/>
            <span>Bestseller</span>
          </button>
        </div>
      </div>
      {/* Section 1 - Beverages */}
      <div className={`menu-category-1 ${vegVisible ? 'visible' : ''}`} ref={vegSectionRef}>
        <h2 onClick={toggleVegetarian} style={{ cursor: 'pointer' }}> Beverages {showVeg ? '▲' : '▼'}</h2>
        {showVeg && (
          <div className="menu-items">
            <CardH title="Cappuccino" description="A frothy espresso-based drink with steamed milk, perfect for coffee lovers." price="₹30" imageUrl="https://i.pinimg.com/236x/6a/86/c3/6a86c387495a30851e5843a582c7b6f2.jpg" iconType="veg"/>
            <CardH title="Regular Coffee" description="Smooth and rich filter coffee to kick-start your day with energy." price="₹25" imageUrl="https://i.pinimg.com/236x/63/5b/81/635b81b56867038bbe71c3787aceef4c.jpg" iconType="veg"/>
            <CardH title="Tea" description="A traditional Indian tea brewed to perfection with rich flavors." price="₹20" imageUrl="https://i.pinimg.com/236x/1e/54/af/1e54afeaa85c39ac3464a613b911e61e.jpg" iconType="veg" />
            <CardH title="Milk" description="Fresh, nutritious milk served warm or cold to refresh your senses." price="₹15" imageUrl="https://i.pinimg.com/236x/b9/02/c7/b902c7e21fbb0f8d04857ea2cbd06fd7.jpg" iconType="veg" />
            <CardH title="Boost" description="A delicious malt-based energy drink to keep you going throughout the day." price="₹20" imageUrl="https://i.pinimg.com/236x/76/5f/6b/765f6b92d3472f031fe081f950265580.jpg" iconType="veg" />
            <CardH title="Horlicks" description="A nutritious malt drink with essential vitamins and minerals, great for all ages." price="₹20" imageUrl="https://i.pinimg.com/236x/22/9b/a8/229ba8fc11bb9314b0cf54177e21570f.jpg" iconType="veg" />
            <CardH title="Badam Milk" description="A warm and comforting almond-flavored milk, full of goodness and flavor." price="₹20" imageUrl="https://i.pinimg.com/236x/3f/2a/3e/3f2a3efc902ab0f48aab34672eec7cc8.jpg" iconType="veg" />
            <CardH title="Green Tea" description="A light, refreshing tea loaded with antioxidants, perfect for a healthy boost." price="₹20" imageUrl="https://i.pinimg.com/236x/47/27/eb/4727eb25d368e75b55cf0c7957db76bc.jpg" iconType="veg" />
            <CardH title="Lemon Tea" description="A refreshing tea infused with lemon, offering a zesty twist for tea lovers." price="₹20" imageUrl="https://i.pinimg.com/236x/d9/f2/2c/d9f22ca2536e9df00612b2c22c3f5cfb.jpg" iconType="veg" />
            <CardH title="Ginger Tea" description="A spicy and invigorating tea with a kick of ginger, perfect for cold days." price="₹20" imageUrl="https://i.pinimg.com/236x/44/e0/d3/44e0d3baedf5c2c654cc095ea68b3fe0.jpg" iconType="veg" />
          </div>
        )}
      </div>


      {/* Section 2 - Snacks */}
      <div className={`menu-category-2 ${nonVegVisible ? 'visible' : ''}`} ref={nonVegSectionRef}>
        <h2 onClick={toggleNonVegetarian} style={{ cursor: 'pointer' }}>Snacks {showNonVeg ? '▲' : '▼'}</h2>
        {showNonVeg && (
          <div className="menu-items">
            <CardH title="French Fries" description="Crispy golden fries, fried to perfection, served with a sprinkle of salt." price="₹65" imageUrl="https://i.pinimg.com/236x/6e/7b/5e/6e7b5e91357a7ce785a75d3449c1ded5.jpg" iconType="veg" />
            <CardH title="Peri Peri French Fries" description="Spicy and flavorful fries coated with zesty peri peri seasoning for a bold taste." price="₹75" imageUrl="https://i.pinimg.com/736x/e8/b9/f5/e8b9f5153c1e7c3d06445b819ba2acbe.jpg" iconType="veg" />
            <CardH title="Onion French Fries" description="Fries topped with savory, crispy fried onions for an extra crunch and taste." price="₹75" imageUrl="https://i.pinimg.com/236x/9e/08/f4/9e08f4f9b7950c3ff1d7aaf915002734.jpg" iconType="veg" />
            <CardH title="Potato Twister" description="A spiral of crispy fried potato, perfectly seasoned and served with dip." price="₹75" imageUrl="https://i.pinimg.com/736x/b1/60/92/b16092600b5253b7d0c2c996761e80ca.jpg" iconType="veg" />
          </div>
        )}
      </div>


      {/* Section 3 - Burgers */}
      <div className={`menu-category-3 ${section1Visible ? 'visible' : ''}`} ref={section1Ref}>
        <h2 onClick={toggleSection1} style={{ cursor: 'pointer' }}> Burgers {showSection1 ? '▲' : '▼'}</h2>
        {showSection1 && (
          <div className="menu-items">
            <CardH title="Veg Burger" description="A delicious veggie patty with fresh lettuce, tomato, and our special sauce, all in a soft bun." price="₹69" imageUrl="https://i.pinimg.com/236x/db/e9/c0/dbe9c03262a3ccc46d61f561d04445ae.jpg" iconType="veg" />
            <CardH title="Cheese Burger" description="A mouth-watering burger with melted cheese, crisp vegetables, and a juicy patty." price="₹69" imageUrl="https://i.pinimg.com/236x/22/29/0d/22290dcfd246cc18d795fe19750e6e68.jpg" iconType="veg" />
            <CardH title="BBQ Burger" description="Savor the smoky flavors of BBQ sauce on a hearty veggie patty, topped with crispy onions." price="₹69" imageUrl="https://i.pinimg.com/236x/7c/99/92/7c999240ae60e689694848a7b911d728.jpg" iconType="nonveg" />
            <CardH title="Veg Tikka Burger" description="A spiced veggie tikka patty with refreshing salad and tangy chutney in a bun." price="₹69" imageUrl="https://i.pinimg.com/236x/8b/ca/db/8bcadb01d9de6142d3736cc3da137bb1.jpg" iconType="veg" />
            <CardH title="Chicken Burger" description="Tender, juicy chicken patty with crunchy lettuce, fresh tomatoes, and mayo in a soft bun." price="₹69" imageUrl="https://i.pinimg.com/236x/06/48/51/064851ef1abc56ef0c6ced9bd3e2dedd.jpg" iconType="nonveg" />
            <CardH title="Egg Burger" description="A classic egg patty burger with creamy mayo and crisp veggies, served in a toasted bun." price="₹69" imageUrl="https://i.pinimg.com/236x/25/55/f4/2555f4fe7d7b160298858418892a5c74.jpg" iconType="egg" />
          </div>
        )}
      </div>


          {/* Section 4 */}
      <div className={`menu-category-4 ${section2Visible ? 'visible' : ''}`} ref={section2Ref}>
        <h2 onClick={toggleSection2} style={{ cursor: 'pointer' }}> Sandwich {showSection2 ? '▲' : '▼'}</h2>
        {showSection2 && (
          <div className="menu-items">
            <CardH title="Veg sandwich" description="Fresh and flavorful sandwich loaded with veggies and spices." price="₹65" imageUrl="https://i.pinimg.com/236x/89/92/a0/8992a00ecf25a0f6dbd300b350f3f44a.jpg" iconType="veg" />
            <CardH title="Tandoori sandwich" description="Smoky tandoori-flavored sandwich with a mix of veggies." price="₹69" imageUrl="https://i.pinimg.com/236x/7b/ea/06/7bea068aade92477e339ee3bdae706b3.jpg" iconType="veg" />
            <CardH title="Paneer sandwich" description="Grilled sandwich stuffed with spiced paneer." price="₹69" imageUrl="https://i.pinimg.com/236x/06/20/09/062009b8f2b77561da44540cec2c5a02.jpg" iconType="veg" />
            <CardH title="Masala sandwich" description="Classic Indian masala twist in every bite." price="₹69" imageUrl="https://i.pinimg.com/736x/3c/df/0b/3cdf0beaf15a0202d4779d85908aae3d.jpg" iconType="veg" />
            <CardH title="Chicken sandwich" description="Succulent chicken slices in a seasoned sandwich." price="₹79" imageUrl="https://i.pinimg.com/236x/c0/7f/d5/c07fd509ed6a0e23950d24360fb54daa.jpg" iconType="nonveg" />
            <CardH title="Chicken tandoori" description="Spicy tandoori chicken packed into a sandwich." price="₹89" imageUrl="https://i.pinimg.com/236x/0f/33/2d/0f332d2a69e00c33219d61dbcfdb06b5.jpg" iconType="nonveg" />
            <CardH title="Chicken masala sandwich" description="Sizzling chicken with flavorful masala." price="₹89" imageUrl="https://i.pinimg.com/236x/a1/a0/18/a1a018a644f0618fb2690d7a29834a69.jpg" iconType="nonveg" />
          </div>
        )}
      </div>

      {/* Section 5 */}
      <div className={`menu-category-5 ${section3Visible ? 'visible' : ''}`} ref={section3Ref}>
        <h2 onClick={toggleSection3} style={{ cursor: 'pointer' }}>Manchurian {showSection3 ? '▲' : '▼'}</h2>
        {showSection3 && (
          <div className="menu-items">
            <CardH title="Gobi" description="Fried cauliflower with a bold Indo-Chinese taste." price="₹39" imageUrl="https://i.pinimg.com/236x/7b/b0/30/7bb030ab0f878545631b980550447e00.jpg" iconType="veg" />
            <CardH title="Gobi chilli" description="Crispy cauliflower with a fiery chili kick." price="₹45" imageUrl="https://i.pinimg.com/236x/d8/80/20/d88020c9869a3607b717a019b17c2c60.jpg" iconType="veg" />
            <CardH title="Mushroom manchurian" description="Flavor-packed mushroom bites in a spicy sauce." price="₹49" imageUrl="https://i.pinimg.com/236x/be/4d/b5/be4db52113dd9bac91d81272c716da44.jpg" iconType="veg" />
            <CardH title="Mushroom chilli" description="Mushroom tossed in tangy, spicy chili sauce." price="₹49" imageUrl="https://i.pinimg.com/236x/18/3e/69/183e69f7122f4bbec0853615d234529e.jpg" iconType="veg" />
            <CardH title="Gobi pepper dry" description="Cauliflower with a peppery dry spice mix." price="₹39" imageUrl="https://i.pinimg.com/236x/47/1a/8f/471a8f0061c962eab3707f5466cfb483.jpg" iconType="veg" />
          </div>
        )}
      </div>

      {/* Section 6 */}
      <div className={`menu-category-6 ${section4Visible ? 'visible' : ''}`} ref={section4Ref}>
        <h2 onClick={toggleSection4} style={{ cursor: 'pointer' }}> Rice {showSection4 ? '▲' : '▼'}</h2>
        {showSection4 && (
          <div className="menu-items">
            <CardH title="Veg rice" description="Classic veggie rice with vibrant flavors." price="₹39" imageUrl="https://i.pinimg.com/236x/1a/c2/7d/1ac27d75c550a6f2358ca69de0b66c7e.jpg" iconType="veg" />
            <CardH title="Jeera rice" description="Rice infused with aromatic cumin seeds." price="₹49" imageUrl="https://i.pinimg.com/236x/5b/72/91/5b729124bfdc306b348c478f31e13b10.jpg" iconType="veg" />
            <CardH title="Shezwan rice veg" description="Spicy schezwan rice with veggies." price="₹49" imageUrl="https://i.pinimg.com/236x/54/ec/f1/54ecf1b0cf09996ae145c9e5d7d607f7.jpg" iconType="spicy" />
            <CardH title="Shezwan egg rice " description="Egg fried rice with schezwan flavors." price="₹65" imageUrl="https://i.pinimg.com/236x/49/65/cb/4965cbb0b76ec29e3314a4109bbb8601.jpg" iconType="egg" />
            <CardH title="Shezwan chicken rice " description="Chicken with spicy schezwan rice." price="₹99" imageUrl="https://i.pinimg.com/236x/04/a8/54/04a8543674dd79a35a27c18e2f966e26.jpg" iconType="nonveg" />
            <CardH title="Mushroom fried rice" description="Stir-fried rice with mushrooms and spices." price="₹79" imageUrl="https://i.pinimg.com/236x/11/f8/53/11f85364646f3829290837aac490fc60.jpg" iconType="veg" />
            <CardH title="Egg fried rice" description="Egg fried rice seasoned to perfection." price="₹69" imageUrl="https://i.pinimg.com/236x/28/e9/4c/28e94caac8618f0f31607978678a1e86.jpg" iconType="egg" />
            <CardH title="Chicken fried rice" description="Flavorful chicken with stir-fried rice." price="₹99" imageUrl="https://i.pinimg.com/236x/b9/05/91/b905911b80952b75758469c7df50a9d6.jpg" iconType="nonveg" />
          </div>
        )}
      </div>

                      {/* Section 7 */}
          <div className={`menu-category-7 ${section5Visible ? 'visible' : ''}`} ref={section5Ref}>
            <h2 onClick={toggleSection5} style={{ cursor: 'pointer' }}>Noodles  {showSection5 ? '▲' : '▼'}</h2>
            {showSection5 && (
              <div className="menu-items">
                <CardH title="Veg noodles" description="A flavorful noodle dish packed with fresh vegetables and seasoned with spices." price="₹49" imageUrl="https://i.pinimg.com/236x/35/9d/28/359d28299cfbf2e050ddf80c0d05b008.jpg" iconType="veg" />
                <CardH title="Egg noodles" description="Stir-fried noodles with eggs, offering a balance of taste and texture." price="₹69" imageUrl="https://i.pinimg.com/236x/1d/78/c4/1d78c4520c00bf513968d20a4ca566e9.jpg" iconType="egg" />
                <CardH title="Chicken noodles" description="Savory noodles stir-fried with tender chicken pieces and fresh vegetables." price="₹99" imageUrl="https://i.pinimg.com/236x/86/0e/0d/860e0dcfa62f5b93fccd6c98bb5b3386.jpg" iconType="nonveg" />
                <CardH title="Hakka noodles" description="Classic Indo-Chinese noodles with veggies, tossed in soy sauce." price="₹69" imageUrl="https://i.pinimg.com/236x/c5/8f/d1/c58fd12b65ef692f88fc641a42eabc6c.jpg" iconType="veg" />
                <CardH title="veg Shezwan noodles " description="Spicy Sichuan-style noodles with veggies for a zesty kick." price="₹69" imageUrl="https://i.pinimg.com/236x/fc/59/5b/fc595b87f21d34877cfac6ab776f5003.jpg" iconType="spicy" />
                <CardH title="egg Shezwan noodles " description="Schezwan-style noodles stir-fried with egg, bringing extra flavor." price="₹79" imageUrl="https://i.pinimg.com/236x/a7/8b/68/a78b68fb06b0f27ffc38de81da21d138.jpg" iconType="egg" />
                <CardH title="chicken Shezwan noodles " description="A spicy Schezwan noodle dish with chicken for an added protein boost." price="₹99" imageUrl="https://i.pinimg.com/236x/da/32/f6/da32f6c8f0f0e5a6055072cb175083a4.jpg" iconType="nonveg" />
              </div>
            )}
          </div>

          {/* Section 8 */}
          <div className={`menu-category-8 ${section6Visible ? 'visible' : ''}`} ref={section6Ref}>
            <h2 onClick={toggleSection6} style={{ cursor: 'pointer' }}>Momos {showSection6 ? '▲' : '▼'}</h2>
            {showSection6 && (
              <div className="menu-items">
                <CardH title="Veg momos" description="Steamed dumplings stuffed with fresh veggies and spices." price="₹79" imageUrl="https://i.pinimg.com/236x/25/31/d2/2531d20404b47de4c76ef3d126349714.jpg" iconType="veg" />
                <CardH title="Chicken momos" description="Juicy dumplings filled with seasoned chicken, perfect for a snack." price="₹99" imageUrl="https://i.pinimg.com/236x/e8/35/ed/e835ed89023c2a6d2d1933321d59efc4.jpg" iconType="nonveg" />
              </div>
            )}
          </div>

          {/* Section 9 */}
          <div className={`menu-category-9 ${section7Visible ? 'visible' : ''}`} ref={section7Ref}>
            <h2 onClick={toggleSection7} style={{ cursor: 'pointer' }}>Milkshakes  {showSection7 ? '▲' : '▼'}</h2>
            {showSection7 && (
              <div className="menu-items">
                <CardH title="Apple" description="A refreshing apple-flavored milkshake blended to perfection." price="₹49" imageUrl="https://i.pinimg.com/236x/8c/4f/cc/8c4fcc332f1c7407aaafac5a4d7fa169.jpg" iconType="veg" />
                <CardH title="Chikku" description="Rich chikku milkshake with a sweet and earthy taste." price="₹49" imageUrl="https://i.pinimg.com/236x/d0/56/e5/d056e5074172473d151b437dbeee4303.jpg" iconType="veg" />
                <CardH title="Mango" description="Creamy mango milkshake made with ripe mangoes for a tropical taste." price="₹49" imageUrl="https://i.pinimg.com/236x/3d/78/a4/3d78a48c8e3aadd0a7a8c4e44235b539.jpg" iconType="veg" />
                <CardH title="Vanilla" description="Classic vanilla milkshake, smooth and deliciously creamy." price="₹59" imageUrl="https://i.pinimg.com/236x/fe/7d/55/fe7d55e005af26588e58ee4b21b4806f.jpg" iconType="veg" />
                <CardH title="Oreo" description="Oreo milkshake, combining cookies with a creamy base for indulgence." price="₹79" imageUrl="https://i.pinimg.com/236x/76/7e/e3/767ee3065c283b8bb7459fbf8b49ada4.jpg" iconType="veg" />
                <CardH title="Kitkat" description="KitKat milkshake with chunks of chocolate-covered wafers." price="₹79" imageUrl="https://i.pinimg.com/564x/bb/e4/2b/bbe42b9be5972f3fe151822e2033bfc5.jpg" iconType="veg" />
                <CardH title="Butterscotch" description="Creamy butterscotch milkshake with a caramelized flavor." price="₹79" imageUrl="https://i.pinimg.com/236x/1d/0c/0b/1d0c0b73c89da53c585d32b5c8705c60.jpg" iconType="veg" />
                <CardH title="Chocolate" description="Decadent chocolate milkshake for all chocolate lovers." price="₹79" imageUrl="https://i.pinimg.com/236x/df/f7/fb/dff7fb444c5439c7fa59f83bcba03cef.jpg" iconType="veg" />
                <CardH title="Strawberry" description="Refreshing strawberry milkshake made with fresh strawberries." price="₹79" imageUrl="https://i.pinimg.com/236x/f3/88/91/f38891ec8c049f04c4e317ff28bd0771.jpg" iconType="veg" />
                <CardH title="Cold coffee" description="Cool and energizing cold coffee with a creamy finish." price="₹79" imageUrl="https://i.pinimg.com/236x/b0/95/0c/b0950c22362a3a30e353bac00bc2ad31.jpg" iconType="veg" />
                <CardH title="Black current" description="A rich blackcurrant milkshake with a tangy, fruity taste." price="₹89" imageUrl="https://i.pinimg.com/236x/56/c7/31/56c73160f785b015df8a2798a2a3d136.jpg" iconType="veg" />
                <CardH title="Dry fruits" description="A thick, nutrient-packed milkshake with assorted dry fruits." price="₹99" imageUrl="https://i.pinimg.com/236x/a1/79/e8/a179e820ef59db4e41cf3faa2e322b2b.jpg" iconType="veg" />
              </div>
            )}
          </div>

                  {/* Section 10 */}
      <div className={`menu-category-10 ${section8Visible ? 'visible' : ''}`} ref={section8Ref}>
        <h2 onClick={toggleSection8} style={{ cursor: 'pointer' }}>Mojitos {showSection8 ? '▲' : '▼'}</h2>
        {showSection8 && (
          <div className="menu-items">
            <CardH title="Vanilla" description="Classic vanilla ice cream, creamy and rich in flavor." price="₹69" imageUrl="https://i.pinimg.com/236x/9e/69/7d/9e697d779f0dd6fdbce5e7f322e3707e.jpg" iconType="veg" />
            <CardH title="Mango" description="Sweet and tropical mango mojito with a refreshing twist." price="₹69" imageUrl="https://i.pinimg.com/736x/1e/d8/c4/1ed8c485abf6ecf7b35741fe965f9a9c.jpg" iconType="veg" />
            <CardH title="Strawberry" description="Fresh and fruity strawberry mojito with a hint of mint." price="₹69" imageUrl="https://i.pinimg.com/736x/7b/fa/78/7bfa78f4c441c1ebd509e4d683069cbb.jpg" iconType="veg" />
            <CardH title="Green apple" description="Crisp and tangy green apple mojito for a zesty experience." price="₹69" imageUrl="https://i.pinimg.com/236x/f7/01/1b/f7011b8ec27d98698e0d3dbfec17a754.jpg" iconType="veg" />
            <CardH title="Blue Curacao" description="Exotic and vibrant blue curacao mojito with a citrusy flavor." price="₹69" imageUrl="https://i.pinimg.com/736x/d6/03/8a/d6038aa4e14ef2d58a4027f995a7d1de.jpg" iconType="veg" />
            <CardH title="Blueberry" description="Refreshing blueberry mojito with a hint of lime." price="₹69" imageUrl="https://i.pinimg.com/236x/1d/0d/48/1d0d483e62a0315faa3e3e4257f37ef3.jpg" iconType="veg" />
            <CardH title="Litchi" description="Sweet and floral litchi mojito with a delicate flavor." price="₹69" imageUrl="https://i.pinimg.com/736x/a0/bb/6f/a0bb6f69c4122ee842c09d7ee23e0659.jpg" iconType="veg" />
            <CardH title="Virgin Mojito" description="Classic and refreshing virgin mojito with lime and mint." price="₹69" imageUrl="https://i.pinimg.com/736x/4d/b6/7d/4db67d0c04c2c4e9e432d91cff65d172.jpg" iconType="veg" />
            <CardH title="Chilli Lemon" description="Spicy chilli lemon mojito for an adventurous kick." price="₹49" imageUrl="https://i.pinimg.com/236x/05/40/ce/0540cebb9a854e85bb401cf32953d0d5.jpg" iconType="veg" />
          </div>
        )}
      </div>

      {/* Section 11 */}
      <div className={`menu-category-11 ${section9Visible ? 'visible' : ''}`} ref={section9Ref}>
        <h2 onClick={toggleSection9} style={{ cursor: 'pointer' }}>Dessert scoops {showSection9 ? '▲' : '▼'}</h2>
        {showSection9 && (
          <div className="menu-items">
            <CardH title="Vanilla" description="Classic vanilla ice cream, creamy and rich in flavor." price="₹30" imageUrl="https://i.pinimg.com/236x/17/ba/d3/17bad31401c77df38d8ffdc1264ff9d6.jpg" iconType="veg" />
            <CardH title="Mango" description="Fresh and tropical mango ice cream." price="₹30" imageUrl="https://i.pinimg.com/236x/ee/e4/e3/eee4e3c063a69f720e44774340405430.jpg" iconType="veg" />
            <CardH title="Strawberry" description="Sweet strawberry ice cream bursting with fruity flavor." price="₹35" imageUrl="https://i.pinimg.com/236x/68/5f/72/685f720703c400a030a5a1f55fa523fd.jpg" iconType="veg" />
            <CardH title="Chocolate" description="Rich and indulgent chocolate ice cream for chocolate lovers." price="₹35" imageUrl="https://i.pinimg.com/236x/38/8f/b2/388fb2336d04feffb6edf99056f46b6a.jpg" iconType="veg" />
            <CardH title="Butterscotch" description="Creamy butterscotch ice cream with caramel crunch." price="₹40" imageUrl="https://i.pinimg.com/564x/86/a9/df/86a9dfd9cca3ca1521b53ef6cb667358.jpg" iconType="veg" />
            <CardH title="Black Currant" description="Tangy black currant ice cream for a unique fruity taste." price="₹40" imageUrl="https://i.pinimg.com/236x/5f/ec/70/5fec70364a78da3fe3497c9e16a7dad7.jpg" iconType="veg" />
            <CardH title="Gud Bud" description="A delightful mix of various flavors topped with dry fruits." price="₹99" imageUrl="https://i.pinimg.com/236x/26/48/b6/2648b628dea841bebf569e217397c21e.jpg" iconType="veg" />
            <CardH title="Banana Split" description="Classic banana split with scoops of your favorite flavors." price="₹109" imageUrl="https://i.pinimg.com/236x/fd/cf/a8/fdcfa893de626ba20d4ae73bff6a670f.jpg" iconType="veg" />
            <CardH title="Dry Fruits Ice Cream" description="Ice cream loaded with dry fruits for a rich taste experience." price="₹129" imageUrl="https://i.pinimg.com/236x/64/05/17/640517043f57155aa1c89634c91acdae.jpg" iconType="veg" />
          </div>
        )}
      </div>


      <div className="menu-page">
           {/* Integrate the Payment Section */}
      <PaymentSection />
    </div>
    </div>
  );
};

export default Menu;
