import API_KEY from '../../../googleConfig.js';
import React from 'react';
import { GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from '@react-google-maps/api';

// import '@reach/combobox/styles.css';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 37.79160,
  lng: -122.46700
};


const MapContainer = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries
  });

  const [markers, setMarkers] = React.useState([]);

  if (loadError) {
    return 'Error loading map :(';
  } else if (!isLoaded) {
    return 'Loading Map...';
  }


  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        onClick={(event) => {
          setMarkers((oldState) => [
            ...oldState,
            {
              lat: event.latLng.lat(),
              lng: event.latLng.lng()
            }])
        }}
      >
        {
          markers.map((marker, i) => (
            <Marker key={i} position={{lat: marker.lat, lng: marker.lng}} />
          ))
        }

      </GoogleMap>
    </div>);
};



export default MapContainer;
