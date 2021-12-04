import React from 'react';

//EXPECTED PROPS: species (array of strings)
const SpeciesList = (props) => {
  console.log('props givin to species list: ', props);
  return (
    <div id="species-list">
      {props.species.map((name, i) => (
      <p key={i} className="species">{name}</p>
      ))}
    </div>
  )
}

export default SpeciesList;
