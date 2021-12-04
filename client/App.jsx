import React from 'react';
import Header from './components/Header.jsx';
import Map from './components/Map.jsx';
import Tiles from './components/Tiles.jsx';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Map />
      <Tiles />
    </React.Fragment>
  );
};

export default App;