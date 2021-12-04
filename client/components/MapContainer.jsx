import API_KEY from '../../googleConfig.js';
import React from 'react';
import MarkerWithData from '../MarkerWithData.js';
import { GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from '@react-google-maps/api';


// const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 37.79160,
  lng: -122.46700
};


const MapContainer = ({markers, setMarkers}) => {
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: API_KEY,
  //   libraries
  // });


  // if (loadError) {
  //   return 'Error loading map :(';
  // } else if (!isLoaded) {
  //   return 'Loading Map...';
  // }

  console.log('markers:', markers);

  const handleMapClick = (event) => {
    console.log('event!');
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();
    console.log('coordinates: ', lat, lng);

    // ** adds a new inset for the user to fill in **

    // note - the props version just takes a new marker to add to state
    setMarkers(new MarkerWithData(lat, lng));
  };

  return (
    <div id="map-container">
      <h3>Scroll through the map to add your favorite spots!</h3>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        onClick={handleMapClick}
      >
        {markers.map((marker, i) => (
            <Marker key={i}
            position={{lat: marker.coordinates.lat, lng: marker.coordinates.lng}}
            icon={{
              url: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Mushroom.svg',
              scaledSize: new window.google.maps.Size(30, 30)
            }} />
          ))}

      </GoogleMap>
    </div>);
};



export default MapContainer;
