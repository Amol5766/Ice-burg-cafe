import React from 'react';
import avatarImage from '../../assets/safwan.jpg'; 
import cafeImage1 from '../../assets/fm1.jpg'; 
import cafeImage2 from '../../assets/fm4.jpg'; 
import cafeImage3 from '../../assets/fm3.jpg'; 
import cafeImage4 from '../../assets/fm7.jpg'; 
import cafeImage5 from '../../assets/fm2.jpg'; 
import recommendedImage1 from '../../assets/fm5.jpg'; 
import './About.css';

function About() {
  return (
    <div className="about-container">
      {/* Avatar Section */}
      <section className="avatar-section">
        <img src={avatarImage} alt="Avatar" className="avatar-img" />
        <h1 className="avatar-header">Welcome to Fresh and More Café</h1>
        <p className="avatar-description">
          Established in 2020, Fresh and More Café blends timeless charm with modern convenience. We offer a warm, inviting space where you can relax and enjoy handcrafted dishes and drinks made with love.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2 className="timeline-header">Our Journey</h2>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-line"></div> 
            <span className="timeline-year">2021</span>
            <p className="timeline-description">Opened the first café with an emphasis on community and quality.</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-line"></div> 
            <span className="timeline-year">2022</span>
            <p className="timeline-description">Expanded to include variety fried foods.</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-line"></div> 
            <span className="timeline-year">2023</span>
            <p className="timeline-description">Introduced our seasonal menus, bringing fresh, local ingredients to every Juice/Dessert/Ice-Cream/Snack.</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-line"></div> 
            <span className="timeline-year">2024</span>
            <p className="timeline-description">Opened new branches across Kodagu, all maintaining our unique café vibe.</p>
          </div>
          <div className="timeline-item">
          <div className="timeline-line"></div> 
            <span className="timeline-year">Ongoing</span>
            <p className="timeline-description">We Hope on Opening More Branches With Fish Curry Rice.</p>
          </div>
        </div>
      </section>

      {/* Stylish Image Gallery Section */}
      <section className="gallery-section">
        <h2 className="gallery-header">Our Café</h2>
        <div className="gallery-container">
          <div className="gallery-item">
            <img src={cafeImage1} alt="Cafe 1" className="gallery-img" />
          </div>
          <div className="gallery-item">
            <img src={cafeImage2} alt="Cafe 2" className="gallery-img" />
          </div>
          <div className="gallery-item">
            <img src={cafeImage3} alt="Cafe 3" className="gallery-img" />
          </div>
          <div className="gallery-item">
            <img src={cafeImage4} alt="Cafe 4" className="gallery-img" />
          </div>
          <div className="gallery-item-5">
            <img src={cafeImage5} alt="Cafe 5" className="gallery-img" />
          </div>
        </div>
      </section>

      {/* Recommended Items Section */}
      <section className="recommended-section">
        <h2 className="recommended-header">Recommended</h2>
        <div className="recommended-container">
          <div className="recommended-item">
            <img src={recommendedImage1} alt="Recommended 1" className="recommended-img" />
            <p className="recommended-description">Try our signature hand-crafted Special GudBud IceCream with fresh local ingredients.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
