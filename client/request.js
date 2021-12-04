import axios from 'axios';
const BASE_URL = 'http://localhost:3000';
const request = {
  getAll: function() {
    console.log('called!');
    return axios.get(BASE_URL + '/observations');
  },

  // should be an object with .name .lat and .lng properties
  addPlace: function({ name, lat, lng }) {
    console.log('called!');
    return axios.post(BASE_URL + '/places', {
      name: name,
      lat: lat,
      lng: lng
    });
  },



  addSpecies: function(species, place) {
    console.log('called!');
    return axios.post(BASE_URL + '/species', {
      name: species,
      place: place

    }).then((response)=> {
      console.log('RESPONSE FROM THE SERVER:', response)
    });
  }

};

export default request;
