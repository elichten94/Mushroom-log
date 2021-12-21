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
        addMarkers(data, refresh);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.fetchAndRerender()
  }

  addMarkers(newMarkers, refresh) {
    if (refresh) {
      this.setState({
        markers: newMarkers
      });
    } else {
      var stateCopy = [...this.state.markers]
      if (Array.isArray(newMarkers)) {
        stateCopy = stateCopy.concat(newMarkers);
      } else {
        stateCopy.push(newMarkers);
      }

      stateCopy.forEach((marker, i )=> {
        marker._index = i;
      });

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
        <div id="blur-filter">
        <Header />
        <MapContainer markers={this.state.markers}
          addMarkers={this.addMarkers}
          setSelected={this.setSelected}
          selected={this.state.selected}
          tileProps={tileProps}/>
        <Tiles tileProps={tileProps}/>
        </div>
      </div>
    );
  }
};

export default App;
