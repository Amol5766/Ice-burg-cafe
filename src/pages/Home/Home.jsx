import React, { useState, useEffect } from 'react';
import './Home.css'; 
import video from '../../assets/The One.mp4';
import Carousel from '../../components/carousel/carousel'; // Import the Carousel component

// Import your images for the carousel
import img1 from '../../assets/millkshake with icecream.jpg';
import img2 from '../../assets/special .jpg';
import img3 from '../../assets/hot drinks.jpg';
import img4 from '../../assets/lassi.jpg';
import img5 from '../../assets/lemon tea.jpg';
import img6 from '../../assets/lime soda.jpg';
import img7 from '../../assets/falooda.jpg';

// Import your cartoon avatars
import avatar1 from '../../assets/amol.jpg';
import avatar2 from '../../assets/sathwik.jpg';
import avatar3 from '../../assets/rajesh.jpg';

function Home() {
  // Define the images and headers for the carousel
  const carouselImages = [img1, img2, img3, img4, img5, img6, img7];
  const carouselHeaders = ["Milkshake With Iceceream", "Special Gud Bud", "hot drinks", "lassi",
     "lemon tea", "lime soda", "falooda"  ];

  // State for Spotify Integration
  const [spotifyTrack, setSpotifyTrack] = useState(null);

  // Set up Spotify data for Saad Lamjarred's track
 useEffect(() => {
  const trackData = {
    trackName: "LM3ALLEM",
    artistName: "Saad Lamjarred",
    trackUrl: "https://open.spotify.com/track/6Tr7kvkbSd4ZKNTn6oynr7",
    albumImageUrl: "https://i.scdn.co/image/ab67616d0000b27341a74d76c0af60eda3b6f78a"  // Add the album image URL here
  };
  setSpotifyTrack(trackData);
}, []);
  


  return (
    <div className="Home-page">
      {/* Hero Video */}
      <div className="hero-video-container-home">
        <video autoPlay loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="hero-title-home">Call Me Sheik Chilli</h1>
      </div>

      {/* Curved Arrow */}
      <div className="curved-arrow">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,10 Q50,880 90,10" stroke="white" strokeWidth="5" fill="transparent" />
          <polygon points="88,6 90,10 88,14" fill="white" />
        </svg>
      </div>

      {/* Fresh and More Juice Shop Section */}
      <div className="juice-shop-container">
        <h2 className="juice-shop-header">Fruit Juice's</h2>
        <p className="juice-shop-description">
          Experience the refreshing taste of nature with our range of fresh, cold-pressed juices. Healthy, vibrant, and packed with nutrients – perfect for a refreshing boost!
        </p>
      </div>

      {/* Curved Arrow for Ice Cream Section */}
      <div className="curved-arrow ice-cream-arrow">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,65 Q50,130 90,10" stroke="white" strokeWidth="5" fill="transparent" />
          <polygon points="88,6 90,10 88,14" fill="white" />
        </svg>
      </div>

      {/* Ice Cream Section */}
      <div className="ice-cream-container">
        <h2 className="ice-cream-header">Delicious Ice Creams</h2>
        <p className="ice-cream-description">
          Indulge in our creamy, mouth-watering ice creams available in a variety of delightful flavors. A perfect treat for all seasons!
        </p>
      </div>

      {/* Curved Arrow for Snacks Section */}
      <div className="curved-arrow snacks-arrow">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,65 Q50,130 90,10" stroke="white" strokeWidth="5" fill="transparent" />
          <polygon points="88,6 90,10 88,14" fill="white" />
        </svg>
      </div>

      {/* Snacks Section */}
      <div className="snacks-container">
        <h2 className="snacks-header">Tasty Snacks</h2>
        <p className="snacks-description">
          Enjoy our range of crunchy, savory snacks – perfect to satisfy your hunger cravings. Whether you're in the mood for something spicy or something salty, we've got it all!
        </p>
      </div>

      {/* Carousel Section */}
      <Carousel images={carouselImages} headers={carouselHeaders} />

              {/* Testimonials Section */}
        <div className="testimonials-container">
          <h2 className="testimonials-header">What Our Customers Say</h2>
          <div className="testimonials">
            <div className="testimonial-item">
              <img src={avatar1} alt="Avatar of Amol M." className="testimonial-avatar" />
              <p>"Amazing juices! The flavors are just out of this world!"</p>
              <span>Amol.</span>
            </div>
            <div className="testimonial-item">
              <img src={avatar2} alt="Avatar of SathwiK." className="testimonial-avatar" />
              <p>"The ice creams are to die for. I'll definitely be back for more!"</p>
              <span>SathwiK.</span>
            </div>
            <div className="testimonial-item">
              <img src={avatar3} alt="Avatar of Rajesh." className="testimonial-avatar" />
              <p>"A perfect place to grab a quick snack and drink. Highly recommended!"</p>
              <span>Rajesh.</span>
            </div>
          </div>
        </div>


       {/* Spotify Section */}
       <div className="spotify-section">
        <h2 className="spotify-header">Now Playing on Spotify</h2>
        {spotifyTrack ? (
          <div className="spotify-track">
            <img src={spotifyTrack.albumImageUrl} alt={`${spotifyTrack.trackName} Album Art`} className="spotify-track-image" />
            <p className="spotify-track-title">Track: {spotifyTrack.trackName}</p>
            <p className="spotify-artist-name">Artist: {spotifyTrack.artistName}</p>
            <a href={spotifyTrack.trackUrl} target="_blank" rel="noopener noreferrer" className="spotify-link">
              Listen on Spotify
            </a>
          </div>
        ) : (
          <p>Loading track...</p>
        )}
      </div>


    </div>
  );
}

export default Home;
