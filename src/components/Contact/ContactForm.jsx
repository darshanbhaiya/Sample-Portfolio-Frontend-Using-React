import React from 'react';
import './ContactForm.css';

const ContactForm = () => (
  <div className="form-container">
    <h2 className="form-title">Leave ME Your Info</h2>
    <form>
      <input type="text" placeholder="Your Full Name ( Required )" required className="input" />
      <input type="email" placeholder="Your Email ( Required )" required className="input" />
      <input type="text" placeholder="Subject" className="input" />
      <textarea placeholder="Your Message" className="textarea" />
      <button type="submit" className="button">SEND MESSAGE</button>
    </form>
  </div>
);

export default ContactForm;
