import React from 'react';
import Header from './components/Header.jsx';
import MapContainer from './components/MapContainer.jsx';
import Tiles from './components/Tiles.jsx';
import './style.scss';
import request from './request.js';
import MarkerWithData from './MarkerWithData.js';

// const createInset = (lat, lng) => {
//   console.log(lat, lng);
// };




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

    this.setMarkers = this.setMarkers.bind(this);
  }


  componentDidMount() {
    // get all data here
    // make a new request
    // on success set state
    const setState = this.setState;
    request.getAll()
      .then(({ data }) => {
        console.log(data);
        setState({
          markers: data
        });
      })
      .catch((err) => {
        throw err;
      })

  }

  componentDidUpdate(prevProps, prevState) {

  }

  setMarkers(newMarker) {

    var stateCopy = [...this.state.markers]
    stateCopy.push(newMarker);
    this.setState({
      markers: stateCopy
    });
  }


// add these in later:
//     submitSpecies: request.addSpecies,
// submitPlace: request.addPlace

  render() {
    return (
      <div id="main-block">
        <Header />
        <MapContainer markers={this.state.markers} setMarkers={this.setMarkers}/>
        <h3 id="tile-banner">My spots:</h3>
        {/* <Tiles tileProps={allProps.tileProps}/> */}
      </div>
    );

  }
};

export default App;
