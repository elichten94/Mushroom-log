import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import API_KEY from '../googleConfig.js';
const libraries = ['places'];

import { useLoadScript } from '@react-google-maps/api';

const Root = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries
  });

  if (loadError) {
    return (<div>Error loading map</div>);
  } else if (!isLoaded) {
    return (<div>Loading Map...</div>);
  } else {
    return (<App />);
  }

}

ReactDOM.render(<Root />, document.getElementById('app'));






