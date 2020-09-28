import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Alphabet.scss';
import alphabetLogo from '../img/logo-alphabet.svg';
import alphabetVideo from '../img/alphabet.mp4';
import lamp from '../img/lampe.jpg';
import table from '../img/Table.jpg';
import ladder from '../img/Echelle.jpg';

const Alphabet = () => {

  // const furniture = [lamp, table, ladder];
  // const [image, setImage] = useState(lamp);

  // useEffect(() => {

  //   {
  //     furniture.forEach((piece, i) => {
  //       setInterval(() => {
  //         setImage(piece);
  //       }, (i + 1) * 2000)
  //     })
  //   }
  // }, [])

  return (
    <section id="alphabet" className="third-section">

      <video src={alphabetVideo} className="alphabet-video" autoPlay loop muted > </video>

      <div className="container">

        <div className="row ">
          <form className="background col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="nom" type="text" />
                <label htmlFor="name">Nom</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label htmlFor="textarea1">Message</label>
              </div>
            </div>
            <button className="waves-effect grey btn col s12">
              envoyer</button>
          </form>
        </div>
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
      </div>
    </section>
  )
};

export default Alphabet;
