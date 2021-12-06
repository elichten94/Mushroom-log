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
    this.fetchAndRerender = this.fetchAndRerender.bind(this);
  }

  fetchAndRerender(refresh) {
    var addMarkers = this.addMarkers;
    return request.getAll()
      .then(({ data }) => {
        console.log('DATA RECIEVED ON REFRESH: ', data);

        addMarkers(data, refresh);
      })
      .catch((err) => {
        throw err;
      })
  }

  componentDidMount() {
    this.fetchAndRerender()
  }

  addMarkers(newMarkers, refresh) {

    if (refresh) {
      // set state only with the new markers
      console.log('OK IM RESETTING TO NEW AND UPDATED MARKERS!', newMarkers);
      this.setState({
        markers: newMarkers
      });
    } else {
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
      submitDescription: request.addDescription,
      retriveMarkers: this.addMarkers,
      fetchAndRerender: this.fetchAndRerender,
      markers: this.state.markers,
      selected: this.state.selected
    }

    return (
      <div id="main-block">
        <Header />
        <MapContainer markers={this.state.markers} addMarkers={this.addMarkers} setSelected={this.setSelected} selected={this.state.selected} />
        {/* render all markers into tiles */}
        <Tiles tileProps={tileProps}/>
      </div>
    );

  }
};

export default App;
