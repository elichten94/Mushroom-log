import React from 'react';
import Header from './components/Header.jsx';
import MapContainer from './components/MapContainer.jsx';
import Tiles from './components/Tiles.jsx';
import './style.scss';

const App = () => {




  return (
    <div id="main-block">
      <Header />
      <MapContainer />
      <Tiles />
    </div>
  );
};

export default App;