var Response = function(og) {
  this.name = og.place || '';
  this.species = og.species || [];
  this.coordinates = {
    lat: Number(og.lat),
    lng: Number(og.lng)
  };
};

module.exports = Response;
