
import React from 'react';
import './Card.css';

const Card = ({ stars, title, description, image, name, role }) => {
  return (
    <div className="card">
      <div className="stars">
        {'★'.repeat(stars)}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="profile">
        <img src={image} alt={name} />
        <div className="profile-info">
          <p>{name}</p>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
