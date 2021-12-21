import React from 'react';
import ListItem from './ListItem.jsx';

const SpeciesList = (props) => {
  return (
    <div id="species-list">
      {props.species.map((speciesObj, i) => (
        <ListItem key={i}
          speciesObj={speciesObj}
          place={props.place}
          fetchAndRerender={props.fetchAndRerender}
          submitDescription={props.submitDescription}
          />
      ))}
    </div>
  )
};

export default SpeciesList;
