import React from 'react';
import SpeciesList from './SpeciesList.jsx';

//TECHDEBT: refactor this to render exisiting data as well as serving as a new form


// EXPECTED PROPS:
/**
 * place (object)
 *    if the object doenst have a name field length,
 *      we open a new card
 *
 *    if it does
 *      we open a card with the name
 *
 * species (array)
 * submitSpecies (function)
 * submitPlace (function)
 */
 const Tile = (props) => {

  // state of form entered
  var [tile, setTile] = React.useState({
    placeText: '',
    speciesText: '',
    species: props.marker.species

  });

  // formview just determines the display before and after entering the location
  var [formView, setFormView] = React.useState(Boolean(!props.marker.name));

  const updatePlace = (event) => {
    setTile({
      ...tile,
      placeText: event.target.value
    });
  };

  const updateSpecies = (event) => {
    setTile({
      ...tile,
      speciesText: event.target.value
    });
  };

  const addSpecies = (event) => {
    event.preventDefault();
    if (!tile.speciesText.length) {
      alert('Please enter a species!');
    }
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
    event.preventDefault();
    if (!tile.placeText.length) {
      alert('Please enter a place!');
    }
    props.submitPlace({
      name: tile.placeText,
      lat: props.marker.lat,
      long: props.marker.lng
    })
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
        <form className="add-place-form">
          <input type="text" onChange={updatePlace} placeholder="My spot"/>
          <button onClick={addPlace}>Add a place</button>
        </form>
      </div>
    );
  } else {
    // make the entered location the title
    // give a prompt for species
    return (
      <div className="tile">
        <p className="place">{tile.placeText}</p>
        <form className="add-species-form >
          <input type="text" onChange={updateSpecies} placeholder="Species"/>
          <button onClick={addSpecies}>Add species</button>
        </form>
        <SpeciesList species={tile.species}/ >
      </div>
    );
  }
};

export default Tile;
