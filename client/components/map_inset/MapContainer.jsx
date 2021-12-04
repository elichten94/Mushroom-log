import API_KEY from '../../../googleConfig.js';
import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';


const handleClick = function(event) {
  console.log(event.target.className);
  // if (event.target.className === "gm-style-iw-d") {
  //   console.log('nice nice');
  // }
};

const containerStyle = {
  width: '500px',
  height: '400px',
};

const center = {
  lat: 41.964901517,
  lng: -87.899913901

};


// const MapContainer = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: API_KEY
//   });

//   if (loadError) return 'Error loading maps';
//   if (!isLoaded) return 'Loading maps';

//   return (
//     <div className="map" onClick={handleClick}>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//       ></GoogleMap>
//     </div>
//   );
// };

const MapContainer = () => {

  function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }



return (<div>
  <h3>My Google Maps Demo</h3>
  <div id="map"></div>
  <script async
    src={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap&libraries=&v=weekly`}
    ></script>
</div>)


}


export default MapContainer;
