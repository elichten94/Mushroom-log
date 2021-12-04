import React from 'react';
import Tile from './Tile.jsx';

// EXPECTED PROPS: places (array of strings)
const Tiles = (props) => {
  var places = Object.keys(props.tileProps.placesToSpecies);
  return (
    <div id="tiles">
      {places.map((place, i) => (
        <Tile
        key={i}
        place={place}
        species={props.tileProps.placesToSpecies[place]}
        submitSpecies={props.tileProps.submitPlace}
        submitPlace={props.tileProps.submitSpecies}
        />
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