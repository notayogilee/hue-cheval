import React from 'react';
import './Contact.scss';
import alphabetVideoMP4 from '../img/alphabet-video-LQ.mp4';

const Contact = () => {

  return (
    <section id="alphabet" className="third-section">

      <video className="alphabet-video" autoPlay loop muted >
        <source src={alphabetVideoMP4} type="video/mp4" />
      </video>

      <div className="container">

        <div className="row ">
          <form className="background col s12" name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="row">
              <div className="input-field col s12">
                <input id="nom" type="text" name="name" />
                <label htmlFor="name">Nom</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" name="email" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="subject" type="text" name="subject" />
                <label htmlFor="name">Subject</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" name="message" className="materialize-textarea"></textarea>
                <label htmlFor="textarea1">Message</label>
              </div>
            </div>
            <button className="waves-effect grey btn col s12">
              envoyer</button>
          </form>
        </div>
        <div className="bottom">
          <div className="contact-phone">
            <i className="material-icons">call</i>{' '}
            <p>{' '} 514-523-0790</p>
          </div>
          <div className="contact-location">
            <i className="material-icons">location_on</i>
            <p>5425 rue de Bordeaux,
            local 103, Montréal, Québec
   H2H 2P9</p>
          </div>
          <div className="flip-display">
            <i className="material-icons">screen_rotation</i>
          </div>
        </div>

      </div>
    </section>
  )
};

export default Contact;
