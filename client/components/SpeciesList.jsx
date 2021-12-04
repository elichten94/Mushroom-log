import React from 'react';

//EXPECTED PROPS: species (array of strings)
const SpeciesList = (props) => {
  return (
    <div id="species-list">
      {props.species.map(name => (<p>{name}</p>))}
    </div>
  )
}

export default SpeciesList;
