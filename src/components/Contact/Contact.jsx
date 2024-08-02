import React from 'react';
import ContactForm from './ContactForm';
import ContactCard from './ContactCard';
import './Contact.css';

const Contact = () => (
  <div className="contact-container" id='contact'>
    <ContactForm />
    <div className="cards-container">
      <ContactCard 
        icon="📍" 
        details={["Country: Bangladesh", "City: Dhaka", "Street: 35 Vhatara, Badda"]} 
      />
      <ContactCard 
        icon="📧" 
        details={["Email: Youremail@Gmail.Com", "Skype: @Yourusername", "Telegram: @Yourusername"]} 
      />
      <ContactCard 
        icon="📞" 
        details={["Support Services: 15369", "Office: +58 (021)356 587 235", "Personal: +58 (021)356 587 235"]} 
      />
    </div>
  </div>
);

export default Contact;
