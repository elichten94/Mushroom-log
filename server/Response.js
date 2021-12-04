var Response = function(og) {


  this.name = og.place || '';
  if ( Array.isArray(og.species)) {
    this.species = og.species
  } else {
    this.species = [og.species] || [];
  }
  this.coordinates = {
    lat: Number(og.lat),
    lng: Number(og.lng)
  };


};

module.exports = Response;
