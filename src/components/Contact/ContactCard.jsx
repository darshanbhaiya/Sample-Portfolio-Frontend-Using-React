import React from 'react';
import './ContactCard.css';

const ContactCard = ({ icon, title, details }) => (
  <div className="card-container">
    <div className="card-icon">{icon}</div>
    <div className="card-content">
      {details.map((detail, index) => (
        <p key={index} className="card-detail">{detail}</p>
      ))}
    </div>
  </div>
);

export default ContactCard;
