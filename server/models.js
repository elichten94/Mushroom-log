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

    var sqlQuery = `
      INSERT INTO places (name, lat, lng)
      VALUES (?, ?, ?)`;

      return pool.query(sqlQuery, [place, lat, lng]);

  },

  insertSpecies: function({ name, place }) {
    // insert a species to the db
  // params: type and name

    var sqlQuery = `
      START TRANSACTION;
      INSERT INTO species (name)
        VALUES (?);
      SET @species_id_to_use = LAST_INSERT_ID();
      INSERT INTO places_species
        VALUES (
          (SELECT id FROM places where places.name = ? LIMIT 1),
          @species_id_to_use);
      COMMIT;`;

    return pool.query(sqlQuery, [name, place]);

  },

  updateDecription({ name, place, description }) {
    // (3, 4, '');
    // 'Elk Glen', 'wild garlic'
    // should add the description to the database and then give that row back
    var sqlQuery = `
      UPDATE places_species SET description = ?
      WHERE place_id =
        (SELECT id FROM places WHERE name = ?)
      AND
      species_id =
        (SELECT id FROM species WHERE name = ?);`;
    return pool.query(sqlQuery, [description, place, name]);

  }

};
