import React from 'react';
import {
  FormControl,
  FormLabel,
  Button
} from '@chakra-ui/react';
import { TextField } from '@material-ui/core';



// insetText prop would be what the server gave us
const Inset = ({ speciesName, place, insetText }) => {
  // should allow the user to save info on their overservation (techdebt: add photo upload)

  // if an inset exists for this observation we render the text view, otherwise an edit form
  // switching to edit should retain the current text

//TEMPORARY:
// insetText = '';



  var [insetState, setInsetState] = React.useState({
    editText: '',
    displayText: insetText || '',
    editMode: Boolean(!(insetText.length))
  });


  const handleInsetAdd = (event) => {
    // later: submit to server, THEN do the following:

    setInsetState({
      ...insetState,
      displayText: insetState.editText,
      editMode: !insetState.editMode
    });

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
      <FormControl id='email'>
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
    // render a parapraph
    console.log('the edit mode:', insetState.editMode);
    return (
      <p className="observation-inset">{insetState.displayText}</p>
    );
  }

};

export default Inset;
