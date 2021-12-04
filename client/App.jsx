import React from 'react';
import Header from './components/Header.jsx';
import MapArea from './components/map_inset/MapArea.jsx';
import Tiles from './components/Tiles.jsx';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <MapArea />
      <Tiles />
    </React.Fragment>
  );
};

export default App;