const pool = require('./connection.js');

module.exports = {
  selectAll: function() {
    // select all observations from db
    var sqlQuery = `
      SELECT places.name AS place, species.name AS species, types.name AS type
      FROM places
      INNER JOIN places_species ON
      places_species.place_id = places.id
      INNER JOIN species ON
      places_species.species_id = species.id
      INNER JOIN types ON
      types.id = species.type_id;`;

    return pool.query(sqlQuery);

  },

  insertPlace: function(reqQParams) {
    // insert a place to the database
    var sqlQuery = `
      INSERT INTO places (name)
      VALUES (?)`;

      return pool.query(sqlQuery, [reqQParams.place]);

  },

  insertSpecies: function() {
    // insert a species to the db
  }

};

// client receives:
/*
  {
    results: [
      {
        place:
        species:
      }
      {
        place:
        species:
      }
      {
        place:
        species:
      }
    ]
  }

*/
