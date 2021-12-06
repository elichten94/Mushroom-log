import React from 'react';
import Inset from './Inset.jsx'

const ListItem = ({ speciesName, place }) => {
  var [open, setOpen] = React.useState(false);
  const toggleInset = (event) => {
    setOpen(!open);
  }

  speciesName = speciesName ? speciesName : '';

  console.log('species and place:', speciesName, place);
  return (
  <>
    <div className="species-entry">
      <span className="species">{speciesName}</span>
      {speciesName.length ? <span className="toggle-inset" onClick={toggleInset}>{'+'}</span> : <></>}

    </div>
    {open ? <Inset speciesName={speciesName} place={place}/> : <></>}
  </>
  );

}

export default ListItem;
