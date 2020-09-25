import React, { useState, useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './Landing.scss';
import Navbar from './Navbar';
import champ from '../img/01_BOLDWIN_Champ_D_Eau.png';
import roses from '../img/02_BOLDWIN_Massif_Des_Roses.png';
import pecheur from '../img/03_BOLDWIN_Pecheur.png';
import nord from '../img/04_BOLDWIN_Nord_Amerique.png';
import caux from '../img/05_BOLDWIN_Caux.png';
import fleuve from '../img/06_BOLDWIN_Fleuve.png';
import saison from '../img/08_BOLDWIN_La_Saison_Est_Courte.png';
import alphabetVideo from '../img/alphabet.mp4';

const Landing = () => {
  useEffect(() => {
    M.AutoInit();
  });


  const [intro, setIntro] = useState(true);

  setTimeout(() => {
    setIntro(false)
  }, 4500);

  return (

    <div className="landing">

      { intro &&
        <div className="image">
        </div>
      }
      {!intro &&
        <Fragment>
          <Navbar />
          <div id="main">
            <h4 id="slide-right">Signalétique — RIDM 2019</h4>
            <p id="slide-left">
              Réserve et classicisme caractérisent le langage signalétique que nous avons désigné pour l’édition 2019 des Rencontres internationales du documentaire de Montréal, une sobriété qui entre en cohérence avec celle de la Cinémathèque québécoise.
            </p>
          </div>

          <div id="beer">
            <div className="carousel">
              <a className="carousel-item" href="#one!"><img src={champ} /></a>
              <a className="carousel-item" href="#two!"><img src={roses} /></a>
              <a className="carousel-item" href="#three!"><img src={pecheur} /></a>
              <a className="carousel-item" href="#four!"><img src={nord} /></a>
              <a className="carousel-item" href="#five!"><img src={caux} /></a>
              <a className="carousel-item" href="#six!"><img src={fleuve} /></a>
              <a className="carousel-item" href="#seven!"><img src={saison} /></a>
            </div>
            <h2 className="beer-title">Articulation visuelle — Boldwin</h2>
            <p className="beer-description">
              Le succès retentissant de l’identité que nous avons développé pour les bières biologiques Boldwin nous a conduit à déployer son langage sur tout un essaim de canevas. Allant de la création de contenu rédactionnel, à l’organisation rythmique de leurs nouveaux signes sur des affiches, des balluchons et des paquetages. Nous constatons avec plaisir que le symbolisme du territoire québécois mobilise l’intérêt.
          </p>
          </div>

          <div id="alphabet">
            <video id="alphabet-video" autoPlay loop muted >
              <source src={alphabetVideo} type="video/mp4" />
            </video>
          </div>

        </Fragment>
      }
    </div>
  )
};

export default Landing;
