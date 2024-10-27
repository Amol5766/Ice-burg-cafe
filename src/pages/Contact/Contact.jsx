import React, { useState } from 'react';
import './Contact.css';



function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted!');
  };

  

  return (
    <div className="contact-container">
      {/* Contact Information Section */}
      <div className="contact-info">
        <h2>Connect With Us</h2>
        <p>+91 7795534672</p>
        <p> IceBurgCafe@gmail.com</p>
        <p>Ice-Burg Cafe, Yadapura, Karnataka 571313</p>
      </div>




      {/* Google Maps Section */}
      <div className="map-container">
        <iframe
          title="Google Maps"
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.99495889165442!2d76.90670828149938!3d11.910701558755758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf371f35ab2519%3A0x8d2ff726af6d689c!2sPK%20JUICE%20UP......!5e0!3m2!1sen!2sin!4v1729023278633!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
