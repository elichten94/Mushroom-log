import React from 'react';
import Tile from './Tile.jsx';
import { Flex, Spacer } from '@chakra-ui/react';

/**
 * Props:
 * state from app
 * two functions
 */


const Tiles = (props) => {

  return (
    <div id="tiles">

        {props.tileProps.markers.map((marker, i) => (
          <Tile
          key={i}
          marker={marker}
          submitSpecies={props.tileProps.submitSpecies}
          submitPlace={props.tileProps.submitPlace}
          />
        ))}

      </div>



  );
};

export default Tiles;


