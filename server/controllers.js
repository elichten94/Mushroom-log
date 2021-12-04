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
    console.log(req.body);
    // query database to insert and respond 201 on success
    if (!req.body.place || !req.body.lat || !req.body.lng) {
      res.status(400).send('Bad request: need `place` query parameter');
    } else {
      models.insertPlace(req.body)
      .then(() => {
        res.status(200).send('added a place');
      })
      .catch((err) => {
        console.error('error adding a place');
        res.status(400).send(err);
      });
    }

  },

  addSpecies: function(req, res) {
    // query database to insert and respond 201 on success

    var { type, name, place } = req.body
    if (!type || !name || !place) {
      res.status(400).send('Bad request: need `type`, `name`, and `place` query parameter');
    } else {
      models.insertSpecies(req.body)
      .then(() => {
        res.status(200).send('added a species');
      })
      .catch((err) => {
        console.error('error adding a species');
        res.status(400).send(err);
      });
    }
  }

};
