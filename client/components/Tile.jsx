import React from 'react';
import SpeciesList from './SpeciesList.jsx';
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react';

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
    species: props.marker.species,
    coordinates: props.marker.coordinates,
    name: props.marker.name
  });

  console.log('PROPS:', props);


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



    // console.log('about to submit species with species:', tile.speciesText, 'loacation:', props.marker.name);
    // console.log('function for submitting species:', props.submitSpecies)
    props.submitSpecies(tile.speciesText, tile.name)
      .then(() => {
        var newSpecies = [...tile.species];
        newSpecies.push(tile.speciesText);

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

    xconsole.log('placetext: ', tile.placetext);
    event.preventDefault();
    if (!tile.placeText.length) {
      alert('Please enter a place!');
      return;
    }
    props.submitPlace({
      place: tile.placeText,
      lat: tile.coordinates.lat,
      lng: tile.coordinates.lng
    })
    .then(() => {
      // wait for it to be sent to the database
      setFormView(!formView);
      // NEED TO SET STATE GLOBAL AGAIN
      props.retriveMarkers([]);
    })
    .catch((err) => {
      throw err;
    });
  };

  if (formView) {
    // return a prompt for location
    return (
      <div className="tile">
        <FormControl className='add-place-form'>
          <Input type='text' onChange={updatePlace} placeholder='Describe the place' />
          <Button className="form-button" colorScheme='blue' onClick={addPlace} size="md">Add </Button>
        </FormControl>
      </div>
    );
  } else {
    // make the entered location the title
    // give a prompt for species

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
