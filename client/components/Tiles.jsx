import React from 'react';
import Tile from './Tile.jsx';

const Tiles = (props) => {
  var xprops = {}
  xprops.locations = ['san fran', 'chitown', 'nycdump'];
  return (
    <div id="tiles">
      TILES GOES HERE
      {xprops.locations.map(location => (
        <Tile location={location} />
      ))}
    </div>
  );
};

export default Tiles;


/* formato of api response
  {
    location: {
      name: chitown
      species: [
        'bunny', 'goose', 'foxxo'
      ]
    },
      location: {
      name: chitown
      species: [
        'bunny', 'goose', 'foxxo'
      ]
    },
      location: {
      name: chitown
      species: [
        'bunny', 'goose', 'foxxo'
      ]
    }
}
 */