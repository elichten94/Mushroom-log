import React from 'react';
import ListItem from './ListItem.jsx';


//EXPECTED PROPS: species (array of strings)
const SpeciesList = (props) => {
  return (
    <div id="species-list">
      {props.species.map((speciesObj, i) => (
        <ListItem key={i} speciesObj={speciesObj} place={props.place}/>
      ))}
    </div>
  )
}

export default SpeciesList;
