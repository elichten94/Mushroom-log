import React from 'react';
import Header from './components/Header.jsx';
import MapContainer from './components/MapContainer.jsx';
import Tiles from './components/Tiles.jsx';
import './style.scss';
import request from './request.js';

var allProps = {
  tileProps: {
    placesToSpecies: {
      chicago: [
        'morels',
        'leeks'
      ],
      sanFran: [
        'palm hearts',
        'artichoke',
        'porcini'
      ]
    },
    submitSpecies: request.addSpecies,
    submitPlace: request.addPlace
  }
}

const App = () => {

  return (
    <div id="main-block">
      <Header />
      <MapContainer />
      <h3 id="tile-banner">My spots:</h3>
      <Tiles tileProps={allProps.tileProps}/>
    </div>
  );
};

export default App;
