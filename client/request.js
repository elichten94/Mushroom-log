import axios from 'axios';
const BASE_URL = 'http://localhost:3000';
const request = {
  getAll: function() {
    return axios.get(BASE_URL + '/observations');
  },

  addPlace: function({ place, lat, lng }) {
    return axios.post(BASE_URL + '/places', {
      place: place,
      lat: lat,
      lng: lng
    });
  },

  addDescription: function(species, place, description) {
    return axios.post(BASE_URL + '/descriptions', {
      name: species,
      place: place,
      description: description
    });
  },

  addSpecies: function(species, place) {
    return axios.post(BASE_URL + '/species', {
      name: species,
      place: place
    });
  }

};

export default request;
