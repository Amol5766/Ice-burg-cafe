import React from 'react';
import '../App.css'; // Ensure this path is correct
import loadingGif from '../assets/loader.gif'; // Update path as needed

function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader">
        <img src={loadingGif} alt="Loading..." />
        <h1> loading......</h1>
      </div>
    </div>
  );
}

export default Loader;
