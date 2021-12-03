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

  addOne: function(req, res) {
    // query database to insert and respond 201 on success

    models.insertOne()
      .then(() => {
        res.status(200).send('added places or species');
      })
      .catch((err) => {
        console.error('adding places or species');
        res.status(400).send(err);
      });
  }

};
