import React from 'react';
import SpeciesList from './SpeciesList.jsx';



const Tile = (props) => {
  var [tile, setTile] = React.useState({
    place: '',
    species: []
  });

  // formview just determines the display before and after entering the location
  var [formView, setFormView] = React.useState(true);


  const updatePlace = (event) => {


  }
  const updateSpecies = (event) => {

  }


  if (formView) {

    // return a prompt for location
    return
  } else {
    // make the entered location the title
    // give a prompt for species
    <div className="tile">
    <form>
      <input className="place" type="text" onChange={updateText} placeholder="My spot"/>
    </form>

  </div>
    return (
      <div id="tile">
        <form>
          <p>{tile.place}</p>
          <input className="species" type="text" onChange={updateText} placeholder="Species"/>
          <SpeciesList species={props.species} />
        </form>

      </div>
    )
  }

};

export default Tile;
