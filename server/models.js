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

  insertPlace: function({ place }) {
    // insert a place to the database


    var sqlQuery = `
      INSERT INTO places (name)
      VALUES (?)`;

      return pool.query(sqlQuery, [place]);

  },

  insertSpecies: function({ type, name, place }) {
    // insert a species to the db
  // params: type and name

    var sqlQuery = `
      START TRANSACTION;
      INSERT IGNORE INTO types (name)
      VALUES (?);
      INSERT INTO species (name, type_id)
        VALUES (
          ?,
          (SELECT id FROM types WHERE types.name = ?));
      SET @species_id_to_use = LAST_INSERT_ID();
      INSERT INTO places_species
        VALUES (
          (SELECT id FROM places where places.name = ?),
          @species_id_to_use);
      COMMIT;`;

    return pool.query(sqlQuery, [type, name, type, place]);

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
