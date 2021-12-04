import React from 'react';
import { GoogleMap,
  Marker,
  InfoWindow
} from '@react-google-maps/api';
const Response = require('../../server/Response.js');

import { Heading } from '@chakra-ui/react';


// const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 37.79160,
  lng: -122.46700
};


const MapContainer = ({markers, addMarkers, selected, setSelected}) => {


  const handleMapClick = (event) => {
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();

    addMarkers(new Response({lat: lat, lng: lng}));
  };

  return (
    <div id="map-container">
      <Heading as="h3" id="map-banner">
        Scroll through the map to add your favorite spots!
      </Heading>

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
              scaledSize: new window.google.maps.Size(30, 30),

            }}
            onClick={() => {
              setSelected(marker);
            }}
            />
          ))}

          {
            selected ? (<InfoWindow position={{
              lat: selected.coordinates.lat + 0.1,
              lng: selected.coordinates.lng
              }}
              onCloseClick={() => {
                setSelected(null);
              }}

            >
              <div>
                {selected.name}
              </div>
            </InfoWindow>)
            :
            <></>
          }

      </GoogleMap>
    </div>);
};



export default MapContainer;
