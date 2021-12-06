import React from 'react';
import Tile from './Tile.jsx';
import { Flex, Spacer, Heading } from '@chakra-ui/react';

/**
 * Props:
 * state from app
 * two functions
 */


const Tiles = (props) => {
  return (
<div id="lower-block">
    <Heading id="tile-banner" as="h3" >
    My spots:
  </Heading>
  <hr/>
    <div id="tiles">


        {props.tileProps.markers.map((marker, i) => (
          <Tile
          key={i}
          input_id={i}
          marker={marker}
          submitSpecies={props.tileProps.submitSpecies}
          submitPlace={props.tileProps.submitPlace}
          retriveMarkers={props.tileProps.retriveMarkers}
          selected={props.tileProps.selected}
          fetchAndRerender={props.tileProps.fetchAndRerender}
          submitDescription={props.tileProps.submitDescription}
          />
        ))}

      </div>
</div>


  );
};

export default Tiles;


