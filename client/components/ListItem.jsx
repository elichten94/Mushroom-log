import React from 'react';
import Inset from './Inset.jsx'

const ListItem = ({ speciesObj, place }) => {
  var [open, setOpen] = React.useState(false);
  const toggleInset = (event) => {
    setOpen(!open);
  }

  // speciesObj = speciesObj ? speciesObj : '';

  console.log('speciesObj and place:', speciesObj, place);
  return (
  <>
    <div className="species-entry">
      <span className="species">{speciesObj.species}</span>
      {speciesObj.species.length ? <span className="toggle-inset" onClick={toggleInset}>{'+'}</span> : <></>}

    </div>
    {open ? <Inset speciesName={speciesObj.species} place={place} insetText={speciesObj.description}/> : <></>}
  </>
  );

}

export default ListItem;
