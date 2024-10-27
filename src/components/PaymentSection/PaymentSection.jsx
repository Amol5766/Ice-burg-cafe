import React from 'react';
import './PaymentSection.css'; // Import the CSS file
import qrCodeImage from '../../assets/QrCode.jpg'; // Import the QR code image

const PaymentSection = () => {
  return (
    <div className="payment-section">
      <h2>Payment Options</h2>
      <p>
        We accept various payment methods for your convenience. You can make payments via QR code or by Cash.
      </p>
      <div className="qr-code-container">
        <img src={qrCodeImage} alt="QR Code for Payments" className="qr-code" />
      </div>
      <p>Scan the QR code to make a payment easily and securely!</p>
    </div>
  );
};

export default PaymentSection;
