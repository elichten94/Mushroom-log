import React from 'react';
import {
  FormControl,
  FormLabel,
  Button
} from '@chakra-ui/react';
import { TextField } from '@material-ui/core';




const Inset = ({ speciesName, place, inset }) => {
  // should allow the user to save info on their overservation (techdebt: add photo upload)

  // if an inset exists for this observation we render the text view, otherwise an edit form
  // switching to edit should retain the current text

  handleInsetAdd = (event) => {

  };

  var [insetMode, setInsetMode] = React.useState({
    editMode: !Boolean(inset),
    text: inset || ''
  });

  if (insetMode.editMode) {
    // render edit mode
  return (

    <div>
      <FormControl id='email'>
        <TextField
          className="observations"
          label="Observations"
          margin="normal"
        />
        <Button onClick={handleInsetAdd}>
          Add
        </Button>

      </FormControl>
    </div>
    );
  } else {
    // render a parapraph

  }

};

export default Inset;
