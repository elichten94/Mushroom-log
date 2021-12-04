import React from 'react';
import SpeciesList from './SpeciesList.jsx';

//TECHDEBT: refactor this to render exisiting data as well as serving as a new form


// EXPECTED PROPS:
/**
 * species (array)
 * submitSpecies (function)
 * submitPlace (function)
 */
 const Tile = (props) => {

  // state of form entered
  var [tile, setTile] = React.useState({
    placeText: '',
    speciesText: '',
    species: props.species //array
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
    event.preventDefault();
    props.submitPlace(placeText)
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
          <input type="submit" onSubmit={addPlace}/>
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
          <input type="submit" onSubmit={addSpecies}/>
          <SpeciesList species={species} />
        </form>
      </div>
    );
  }
};


export default Tile;