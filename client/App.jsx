import React from 'react';
import Header from './components/Header.jsx';
import MapContainer from './components/MapContainer.jsx';
import Tiles from './components/Tiles.jsx';
import './style.scss';
import request from './request.js';
const Response = require('../server/Response.js');


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      selected: null
    };

    this.addMarkers = this.addMarkers.bind(this);
    this.setSelected = this.setSelected.bind(this);
  }


  componentDidMount() {
    // get all data here
    // make a new request
    // on success set state
    var addMarkers = this.addMarkers;

    request.getAll()
      .then(({ data }) => {

        addMarkers(data);
      })
      .catch((err) => {
        throw err;
      })

  }

  // componenetDidUpdate(prevProps, prevState) {
  //   if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
  //     var addMarkers = this.addMarkers;
  //     request.getAll()
  //     .then(({ data }) => {
  //       console.log(data);
  //       addMarkers(data);
  //     })
  //     .catch((err) => {
  //       throw err;
  //     })

  //   }
  // }

  addMarkers(newMarkers) {
    // can be a single marker or array of markers from an api call
    var stateCopy = [...this.state.markers]
    if (Array.isArray(newMarkers)) {
      stateCopy = stateCopy.concat(newMarkers);
    } else {
      stateCopy.push(newMarkers);
    }

    // assign indexes for selecting
    stateCopy.forEach((marker, i )=> {
      marker._index = i;
    })

    this.setState({
      markers: stateCopy
    });
  }


  setSelected(marker) {
    this.setState({
      selected: marker
    });
  }


  render() {
    var tileProps = {
      submitSpecies: request.addSpecies,
      submitPlace: request.addPlace,
      retriveMarkers: this.addMarkers,
      markers: this.state.markers,
      selected: this.state.selected
    }

    return (
      <div id="main-block">
        <Header />
        <MapContainer markers={this.state.markers} addMarkers={this.addMarkers} setSelected={this.setSelected} selected={this.state.selected} />
        <h3 id="tile-banner">My spots:</h3>
        {/* render all markers into tiles */}
        <Tiles tileProps={tileProps}/>
      </div>
    );

  }
};

export default App;
