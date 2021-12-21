const models = require('./models.js');
const transform = require('./transform');

module.exports = {
  requestAll: function(req, res) {
    models.selectAll()
      .then(([rows, fields]) => {
        var shapedData = transform.shapeData(rows);
        res.status(200).send(shapedData);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },

  addPlaces: function(req, res) {
    if (!req.body.place || !req.body.lat || !req.body.lng) {
      res.status(400).send(new Error('Bad request: missing query parameters'));
    } else {
      models.insertPlace(req.body)
      .then(([rows, fields]) => {
        res.status(201).send('Added place');
      })
      .catch((err) => {
        res.status(400).send(err);
      });
    }

  },

  addSpecies: function(req, res) {
    var { name, place } = req.body;
    if (!name || !place) {
      res.status(400).send('Bad request: need `name` and `place` query parameters');
    } else {
      models.insertSpecies(req.body)
      .then(([rows, fields]) => {
        res.status(201).send('Added species');
      })
      .catch((err) => {
        res.status(400).send(err);
      });
    }
  },

  addDescription: function(req, res) {
    // add the description on the req body
    var { name, place, description } = req.body
    if (!name || !place || !description) {
      res.status(400).send('Bad request - missing body parameters');
    } else {
      models.updateDecription(req.body)
        .then(() => {
          res.status(201).send('Added description');
        })
        .catch((err) => {
          res.status(500).send(err);
        })
    }
  }
};
