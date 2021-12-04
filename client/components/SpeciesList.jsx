import React from 'react';
import Inset from './Inset.jsx'

//EXPECTED PROPS: species (array of strings)
const SpeciesList = (props) => {
  var [open, setOpen] = React.useState(false);

  return (
    <div id="species-list">
      {props.species.map((name, i) => (
        <div key={i} className="species-entry">
          <span className="species">{name}</span>
          <span className="inset-button">+</span>
          {open ? <Inset /> : <></>}
      </div>
      ))}
    </div>
  )
}

export default SpeciesList;
