import React from 'react';
import Tile from './Tile.jsx';

// EXPECTED PROPS: places (array of strings)
const Tiles = (props) => {
  var places = Object.keys(props.placesToSpecies);
  return (
    <div id="tiles">
      {places.map(place => (
        <Tile place={place} species={props.placesToSpecies[place]} />
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