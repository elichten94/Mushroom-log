var Response = function(og) {
  console.log('IN RESPONSE: PASSED IN', og);

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

  console.log(
    'value being returned from response: ', this
  )
};

module.exports = Response;
