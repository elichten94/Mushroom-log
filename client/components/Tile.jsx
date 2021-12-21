import React from 'react';
import SpeciesList from './SpeciesList.jsx';
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react';

const Tile = (props) => {
  var s_index = props.selected === null ? -1 : props.selected._index;

  var [tile, setTile] = React.useState({
    placeText: '',
    speciesText: '',
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

    document.getElementById(tile.input_id).value = '';
    props.submitSpecies(tile.speciesText, tile.name)
      .then(() => {
        return props.fetchAndRerender('refresh');
      })
      .then(() => {
        var newSpecies = [...tile.species];
        newSpecies.push({species: tile.speciesText, description: ''})
        setTile({
          ...tile,
          species: newSpecies
        });
      })
      .catch((err) => {
        console.error(err);
      })
  };

  const addPlace = (event) => {
    event.preventDefault();
    var nameToAdd = tile.placeText;
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
      console.error(err);
    });
  };

  var classNames = tile.selected ? 'tile' : 'tile';
  if (formView) {
    return (
      <div className={classNames}>
        <FormControl className='add-place-form'>
          <Input type='text' className="tile-input" onChange={updatePlace} placeholder='Describe the place' />
          <Button className="form-button" colorScheme='blue' onClick={addPlace} size="md">Add </Button>
        </FormControl>
      </div>
    );
  } else {
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
