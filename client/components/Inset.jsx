import React from 'react';
import {
  FormControl,
  FormLabel,
  Button
} from '@chakra-ui/react';
import { TextField } from '@material-ui/core';



// insetText prop would be what the server gave us
const Inset = ({ speciesName, place, insetText, fetchAndRerender, submitDescription }) => {
  // should allow the user to save info on their overservation (techdebt: add photo upload)

  // if an inset exists for this observation we render the text view, otherwise an edit form
  // switching to edit should retain the current text

//TEMPORARY:
// insetText = '';



  var [insetState, setInsetState] = React.useState({
    editText: '',
    displayText: insetText,
    editMode: Boolean(!(insetText.length))
  });






  console.log(
    'RECEIVED INSET TEXT:', insetText
  );
  const handleInsetAdd = (event) => {
    // later: submit to server, THEN do the following:

    if (insetState.editText.length) {

      // make an api call to add the item to the db
      submitDescription(speciesName, place, insetState.editText)
        // NOTE - commented this out because new props were not reflecting the updated data for some reason,
        // however, data is being logged and the updated component appears on refresh and close/open inset
      // .then(() => {
      //     //all good :)
      //     console.log('added description');
      //     return fetchAndRerender('refresh');
      //   })
        .then(() => {
          // console.log('recieved INSET TEXT LENGTH (DESCRIPTION) PROP:', insetText.length)

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
    // render a parapraph
    console.log('the edit mode:', insetState.editMode);
    return (
      <p className="observation-inset">{insetState.displayText}</p>
    );
  }

};

export default Inset;
