import React, { useState, Fragment } from 'react';
import './Landing.scss';
import Navbar from './Navbar';
import champ from '../img/01_BOLDWIN_Champ_D_Eau.png';
import roses from '../img/02_BOLDWIN_Massif_Des_Roses.png';
import pecheur from '../img/03_BOLDWIN_Pecheur.png';
import nord from '../img/04_BOLDWIN_Nord_Amerique.png';
import caux from '../img/05_BOLDWIN_Caux.png';
import fleuve from '../img/06_BOLDWIN_Fleuve.png';
import saison from '../img/08_BOLDWIN_La_Saison_Est_Courte.png';

const Landing = () => {

  const [intro, setIntro] = useState(false);

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
            <h1 id="slide-right">Signalétique — RIDM 2019</h1>
            <p id="slide-left">
              Réserve et classicisme caractérisent le langage signalétique que nous avons désigné pour l’édition 2019 des Rencontres internationales du documentaire de Montréal, une sobriété qui entre en cohérence avec celle de la Cinémathèque québécoise.
          </p>
          </div>
          <div id="beer">
            <div class="carousel">
              <a class="carousel-item" href="#one!"><img src={champ} /></a>
              <a class="carousel-item" href="#two!"><img src={roses} /></a>
              <a class="carousel-item" href="#three!"><img src={pecheur} /></a>
              <a class="carousel-item" href="#four!"><img src={nord} /></a>
              <a class="carousel-item" href="#five!"><img src={caux} /></a>
              <a class="carousel-item" href="#six!"><img src={fleuve} /></a>
              <a class="carousel-item" href="#seven!"><img src={saison} /></a>
              <a class="carousel-item" href="#eight!"><div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={saison} />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                  <p><a href="#">This is a link</a></p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
              </div></a>
            </div>
            <h1 id="slide-right">Articulation visuelle — Boldwin</h1>
            <p id="slide-left">
              Le succès retentissant de l’identité que nous avons développé pour les bières biologiques Boldwin nous a conduit à déployer son langage sur tout un essaim de canevas. Allant de la création de contenu rédactionnel, à l’organisation rythmique de leurs nouveaux signes sur des affiches, des balluchons et des paquetages. Nous constatons avec plaisir que le symbolisme du territoire québécois mobilise l’intérêt.
          </p>
          </div>

        </Fragment>
      }
    </div>
  )
};

export default Landing;
