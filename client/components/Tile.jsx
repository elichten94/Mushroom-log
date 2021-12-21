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

  console.log('PROPS::', props);
  var s_index = props.selected === null ? -1 : props.selected._index;

  var [tile, setTile] = React.useState({
    placeText: '',
    speciesText: '',
    // an array of objects
    species: props.marker.species,
    coordinates: props.marker.coordinates,
    name: props.marker.name.length ? props.marker.name : '',
    selected: s_index === props.marker._index,
    input_id: props.input_id
  });

  React.useEffect(() => {
    setTile({
      ...tile,
      selected: !tile.selected
    })
  }, [s_index]);

  var [formView, setFormView] = React.useState(Boolean(!props.marker.name));

  const updatePlace = (event) => {
    setTile({
      ...tile,
      placeText: event.target.value
    });
  };

  console.log('selected? ', tile.selected)

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
      return;
    }

    //clear input field
    document.getElementById(tile.input_id).value = '';

    props.submitSpecies(tile.speciesText, tile.name)
      .then(() => {
        return props.fetchAndRerender('refresh');
      })

      .then(() => {
        console.log('props after RELOAD: ', props)
        var newSpecies = [...tile.species];
        newSpecies.push({species: tile.speciesText, description: ''})

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
    var nameToAdd = tile.placeText;
    console.log('PLACE ENTERED: ', tile.placeText);
    event.preventDefault();
    if (!tile.placeText.length) {
      alert('Please enter a place!');
      return;
    }

    props.submitPlace({
      place: nameToAdd,
      lat: tile.coordinates.lat,
      lng: tile.coordinates.lng
    })
    .then(() => {
      setTile({
        ...tile,
        name: nameToAdd
      });
      setFormView(!formView);
      props.retriveMarkers([]);
    })
    .catch((err) => {
      throw err;
    });
  };

  // later change to selected-tile
  var classNames = tile.selected ? 'tile' : 'tile';

  if (formView) {
    // return a prompt for location
    return (
      <div className={classNames}>
        <FormControl className='add-place-form'>
          <Input type='text' className="tile-input" onChange={updatePlace} placeholder='Describe the place' />
          <Button className="form-button" colorScheme='blue' onClick={addPlace} size="md">Add </Button>
        </FormControl>
      </div>
    );
  } else {
    // give a prompt for species
    var placeHeading = tile.placeText.length ? tile.placeText : props.marker.name;
    return (

          <div className={classNames}>
            <Heading className="place"  as="h3" size="md">
              {placeHeading}
            </Heading>
            <FormControl className='add-species-form'>
              <Input id={tile.input_id} className="tile-input" type='text' onChange={updateSpecies} placeholder='Enter a species' />
              <Button className="form-button" colorScheme='green' onClick={addSpecies} size="md">Add </Button>
            </FormControl>
            <SpeciesList species={tile.species}
              place={tile.name}
              fetchAndRerender={props.fetchAndRerender}
              submitDescription={props.submitDescription}
              />
          </div>

    );
  }
};

export default Tile;
