import React from 'react';
import SpeciesList from './SpeciesList.jsx';

//TECHDEBT: refactor this to render exisiting data as well as serving as a new form


// EXPECTED PROPS:
/**
 * place (string)
 * species (array)
 * submitSpecies (function)
 * submitPlace (function)
 */
 const Tile = (props) => {

  // state of form entered
  var [tile, setTile] = React.useState({
    placeText: '',
    speciesText: '',
    // later - species: props.species //array
    species: []
  });

  // formview just determines the display before and after entering the location
  var [formView, setFormView] = React.useState(true);


  const updatePlace = (event) => {
    setTile({
      placeText: event.target.value
    });
  };

  const updateSpecies = (event) => {
    setTile({
      speciesText: event.target.value
    });
  };

  const addSpecies = (event) => {
    event.preventDefault();
    props.submitSpecies(speciesText)
      .then(() => {
        var newSpecies = [...tile.species].push(speciesText)
        setTile({
          species: newSpecies
        });
      })
      .catch((err) => {
        throw err;
      })
  };

  const addPlace = (event) => {
    console.log('tile state:', tile);

    event.preventDefault();
    props.submitPlace(tile.placeText)
    .then(() => {
      // wait for it to be sent to the database
      setFormView(!formView);
    })
    .catch((err) => {
      throw err;
    });
  };


  if (formView) {
    // return a prompt for location
    return (
      <div className="tile">
        <form>
          <input className="place" type="text" onChange={updatePlace} placeholder="My spot"/>
          <button onClick={addPlace}>Add place</button>
        </form>
      </div>
    );
  } else {
    // make the entered location the title
    // give a prompt for species
    return (
      <div className="tile">
        <form>
          <p>{tile.placeText}</p>
          <input className="species" type="text" onChange={updateSpecies} placeholder="Species"/>
          <button onClick={addSpecies}>Add species</button>
          <SpeciesList species={tile.species}/ >
        </form>
      </div>
    );
  }
};


export default Tile;