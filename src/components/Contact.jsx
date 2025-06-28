import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1>Contact <i>Flower Shop</i></h1>
        <p>We’d love to hear from you! Fill out the form below or reach us directly.</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <p className="contact-info">
          📞 +91 98765 43210 &nbsp; | &nbsp; 📧 hello@flowershop.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
