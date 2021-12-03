const models = require('./models.js');

module.exports = {
  requestAll: function(req, res) {
    // query database and respond with results
    models.selectAll()
      .then(([rows, fields]) => {
        res.status(200).send(rows);
      })
      .catch((err) => {
        console.error('error getting places and species');
        res.status(404).send(err);
      });
  },

  addPlaces: function(req, res) {
    // query database to insert and respond 201 on success

    models.insertPlace()
      .then(() => {
        res.status(200).send('added a species');
      })
      .catch((err) => {
        console.error('error adding a species');
        res.status(400).send(err);
      });
  },

  addSpecies: function(req, res) {
    // query database to insert and respond 201 on success

    models.insertSpecies()
      .then(() => {
        res.status(200).send('added place');
      })
      .catch((err) => {
        console.error('error adding place');
        res.status(400).send(err);
      });
  }

};
