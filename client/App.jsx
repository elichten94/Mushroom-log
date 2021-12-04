import React from 'react';
import Header from './components/Header.jsx';
import MapContainer from './components/MapContainer.jsx';
import Tiles from './components/Tiles.jsx';
import './style.scss';
import request from './request.js';
import Marker from './Marker.js';

// const createInset = (lat, lng) => {
//   console.log(lat, lng);
// };

var allProps = {
  tileProps: {
    placesToSpecies: {
      chicago: [
        'morels',
        'leeks'
      ],
      sanFran: [
        'palm hearts',
        'artichoke',
        'porcini'
      ]
    },
    submitSpecies: request.addSpecies,
    submitPlace: request.addPlace
  }
}

// idea: have a global state here of tiles from db, AND
  // THE NUMBER of tiles that should be here
  // if the number of tiles is greater than what we currently have from db,
  // make that many new ones

// todo:
// 1: refactor to class based here
// 2. Change schema to have coordinates for each entry (add dummies)
// 3. Add the componentDidMount and componentDidUpdate methods
// 4. Add the appropriate method for making the mushrooms appear on the map where coordinates say
// 5. Test the data rendering

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: []
    };
  }


  componentDidMount() {

  }

  componentDidUpdate() {

  }

  setMarkers(newMarker) {
    var stateCopy = [...this.state.markers]
    stateCopy.push(newMarker);
    this.setState(stateCopy);
  }



  render() {
    return (
      <div id="main-block">
        <Header />
        <MapContainer createInset={createInset} markers={markers} setMarkers={setMarkers}/>
        <h3 id="tile-banner">My spots:</h3>
        <Tiles tileProps={allProps.tileProps}/>
      </div>
    );

  }
};

export default App;
