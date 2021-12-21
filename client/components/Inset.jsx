import React from 'react';
import {
  FormControl,
  FormLabel,
  Button
} from '@chakra-ui/react';
import { TextField } from '@material-ui/core';

const Inset = ({ speciesName, place, insetText, fetchAndRerender, submitDescription }) => {

  var [insetState, setInsetState] = React.useState({
    editText: '',
    displayText: insetText,
    editMode: Boolean(!(insetText.length))
  });

  const handleInsetAdd = (event) => {
    if (insetState.editText.length) {
      submitDescription(speciesName, place, insetState.editText)
        .then(() => {
          setInsetState({
            ...insetState,
            displayText: insetState.editText,
            editMode: !insetState.editMode
          });
        })
        .catch((err) => {
          console.log('error adding description or updating app');
          throw err;
        });
    }
  };

  const handleEdit = (event) => {
    setInsetState({
      ...insetState,
      editText: event.target.value
    });
  }

  if (insetState.editMode) {
  return (

    <div>
      <FormControl>
        <textarea
          onChange={handleEdit}
          className="observations"
          label="Observations"
          margin="normal"
        ></textarea>
        <Button onClick={handleInsetAdd}>
          Add
        </Button>
      </FormControl>
    </div>
    );
  } else {
    console.log('the edit mode:', insetState.editMode);
    return (
      <p className="observation-inset">{insetState.displayText}</p>
    );
  }

};

export default Inset;
