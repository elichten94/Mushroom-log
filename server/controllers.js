const models = require('./models.js');
const transform = require('./transform');

module.exports = {
  requestAll: function(req, res) {
    // query database and respond with results
    models.selectAll()
      .then(([rows, fields]) => {
        var shapedData = transform.shapeData(rows);
        res.status(200).send(shapedData);
      })
      .catch((err) => {
        console.err('error getting places and species', err);
        res.status(404).send(err);
      });
  },

  addPlaces: function(req, res) {
    console.log(req.body);
    // query database to insert and respond 201 on success
    if (!req.body.place || !req.body.lat || !req.body.lng) {
      res.status(400).send(new Error('Bad request: need all query parameters'));
    } else {
      models.insertPlace(req.body)
      .then(([rows, fields]) => {
        res.status(201).send('added a place');
      })
      .catch((err) => {
        console.log('error adding a place', err);
        res.status(400).send(err);
      });
    }

  },

  addSpecies: function(req, res) {
    // query database to insert and respond 201 on success
    console.log(req.body);
    var { name, place } = req.body;
    if (!name || !place) {
      console.log('error in body params (addSpecies)');

      res.status(400).send('Bad request: need `name` and `place` query parameter');
    } else {
      models.insertSpecies(req.body)
      .then(([rows, fields]) => {
        res.status(201).send('added a species');
      })
      .catch((err) => {
        console.log('error adding a species', err);
        res.status(400).send(err);
      });
    }
  },

  addDescription: function(req, res) {
    // add the description on the req body
    var { name, place, description } = req.body
    if (!name || !place || !description) {
      console.log('missing body param');
      res.status(400).send('Bad request - missing body parameters');
    } else {
      models.updateDecription(req.body)
        .then(() => {
          res.status(201).send('Added description!');
        })
        .catch((err) => {
          console.log('error adding a description');
          res.status(500).send('Error adding description');
        })
    }
  }

};
