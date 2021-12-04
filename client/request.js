import axios from 'axios';
const BASE_URL = 'http://localhost:3000';
const request = {
  getAll: function() {
    return axios.get(BASE_URL + '/observations');
  },

  addPlace: function(place) {
    return axios.post(BASE_URL + '/places', {
      place: place``
    });
  },



  addSpecies: function() {
    return axios.post(BASE_URL + '/species', {
      species: species
    });
  }

};

export default request;
