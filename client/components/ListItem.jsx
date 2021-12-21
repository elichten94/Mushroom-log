import React from 'react';
import Inset from './Inset.jsx'

const ListItem = ({ speciesObj, place, fetchAndRerender, submitDescription }) => {
  var [open, setOpen] = React.useState(false);
  const toggleInset = (event) => {
    setOpen(!open);
  };

  return (
    <>
      <div className="species-entry">
        <span className="species">{speciesObj.species}</span>
        {speciesObj.species.length ? <span className="toggle-inset" onClick={toggleInset}>{'+'}</span> : <></>}

      </div>
      {open ?
       <Inset
          speciesName={speciesObj.species}
          place={place}
          insetText={speciesObj.description}
          fetchAndRerender={fetchAndRerender}
          submitDescription={submitDescription}
          />
        :
        <></>}
    </>
  );
};

export default ListItem;
