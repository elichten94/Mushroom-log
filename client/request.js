import axios from 'axios';
const BASE_URL = 'http://localhost:3000';
const request = {
  getAll: function() {
    console.log('called!');
    return axios.get(BASE_URL + '/observations');
  },

  addPlace: function(place) {
    console.log('called!');
    return axios.post(BASE_URL + '/places', {
      place: place
    });
  },



  addSpecies: function(species) {
    console.log('called!');
    return axios.post(BASE_URL + '/species', {
      species: species
    });
  }

};

export default request;
