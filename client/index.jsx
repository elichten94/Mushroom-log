import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
const libraries = ['places'];


import useLoadScript from '@react-google-maps/api';

const Root = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries
  });


  if (loadError) {
    return 'Error loading map :(';
  } else if (!isLoaded) {
    return 'Loading Map...';
  } else {
    ReactDOM.render(<App />, document.getElementById('app'));
  }

}






