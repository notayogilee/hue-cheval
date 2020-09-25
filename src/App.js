import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.scss';
import Landing from './components/Landing';

const App = () => {

  useEffect(() => {
    M.AutoInit();
  });

  return (

    <Landing />

  );
}

export default App;
