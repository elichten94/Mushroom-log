const pool = require('./connection.js');

module.exports = {
  selectAll: function() {
    // select all observations from db
    var sqlQuery = `
      SELECT places.name AS place, species.name AS species, places.lat, places.lng
      FROM places
      INNER JOIN places_species ON
      places_species.place_id = places.id
      INNER JOIN species ON
      places_species.species_id = species.id
      ORDER BY places.name;`;

    return pool.query(sqlQuery);

  },

  insertPlace: function({ place, lat, lng }) {
    // insert a place to the database
    console.log('calling mysql from insertPlace');

    var sqlQuery = `
      INSERT INTO places (name, lat, lng)
      VALUES (?, ?, ?)`;

      return pool.query(sqlQuery, [place, lat, lng]);

  },

  insertSpecies: function({ name, place }) {
    // insert a species to the db
  // params: type and name

  console.log('calling mysql from insertPlace')
    var sqlQuery = `
      START TRANSACTION;
      INSERT INTO species (name)
        VALUES (?);
      SET @species_id_to_use = LAST_INSERT_ID();
      INSERT INTO places_species
        VALUES (
          (SELECT id FROM places where places.name = ?),
          @species_id_to_use);
      COMMIT;`;

    return pool.query(sqlQuery, [name, place]);

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
