import React, { useRef } from 'react';
import SocialLinks from '../SocialLinks';
import './Contact.css';
import emailjs from '@emailjs/browser';


const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;


const Contact = props => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Please, use the form below or send an email to <br/>
              <span className="mail">
                  Email: 
                <i className="fas fa-at at" />
                gcinahlophe01@gmail.
                <i className="fas fa-circle dot" />
                com
              </span>
              :
            </p>
          </div>
          <SocialLinks />
        </div>
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className="button" type="submit" value="Send" />
    </form>
      </div>
    </section>
  );
};

export default Contact;

