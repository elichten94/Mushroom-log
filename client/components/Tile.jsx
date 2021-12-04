import React from 'react';
import SpeciesList from './SpeciesList.jsx';
import {
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from '@chakra-ui/react'

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
    console.log('tile.speciesText:', tile.speciesText);
    if (!tile.speciesText.length) {
      alert('Please enter a species!');
      return;
    }

    console.log('about to submit species with species:', tile.speciesText, 'loacation:', props.marker.name);
    console.log('function for sumitting species:', props.submitSpecies)
    props.submitSpecies(tile.speciesText, props.marker.name)
      .then(() => {
        console.log('THE TILE STATE:', tile );
        console.log('spread species: ', [...tile.species]);

        var newSpecies = [...tile.species];
        newSpecies.push(tile.speciesText);
        console.log('HERE ARE THE PROPS: ', props);
        console.log('NEW SPECIES LIST:', newSpecies );

        setTile({
          ...tile,
          species: newSpecies
        });
      })
      .catch((err) => {
        console.error('errant request -Elliot')
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

  console.log('TILE:', tile);


  if (formView) {
    // return a prompt for location
    return (
      <div className="tile">
        {/* <form className="add-place-form">
          <input type="text" onChange={updatePlace} placeholder="My spot"/>
          <button onClick={addPlace}>Add a place</button>
        </form> */}
        <FormControl className='add-place-form'>
              <Input type='text' onChange={updatePlace} placeholder='Describe the place' />
              <Button className="form-button" colorScheme='blue' onClick={addPlace} size="md">Add </Button>

            </FormControl>

      </div>

    );
  } else {
    // make the entered location the title
    // give a prompt for species
    console.log('props: ', props.marker);

    var placeHeading = tile.placeText.length ? tile.placeText : props.marker.name;
    return (

          <div className="tile">
            <Heading className="place"  as="h3" size="md">
              {placeHeading}
            </Heading>

            <FormControl className='add-species-form'>
              <Input type='text' onChange={updateSpecies} placeholder='Enter a species' />
              <Button className="form-button" colorScheme='green' onClick={addSpecies} size="md">Add </Button>

            </FormControl>

            <SpeciesList species={tile.species}/ >
          </div>

    );
  }
};

export default Tile;
