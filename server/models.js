const pool = require('./connection.js');

module.exports = {
  selectAll: function() {
    // select all observations from db
    return new Promise((resolve, reject) => {
      resolve(['some rows', 'some fields'])
    });
  },

  insertPlace: function() {
    // insert a place to the database
  },

  insertSpecies: function() {
    // insert a species to the db
  }

};
