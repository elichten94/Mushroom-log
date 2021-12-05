import React from 'react';
import Inset from './Inset.jsx'

const ListItem = ({ speciesName, place }) => {
  var [open, setOpen] = React.useState(false);

  return (
  <>
    <div className="species-entry">
      <span className="species">{speciesName}</span>
      <span className="inset-trigger"> {'+'} </span>
    </div>
    {open ? <Inset speciesName={speciesName} place={place}/> : <></>}
  </>
  );

}

export default ListItem;
