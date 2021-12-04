const path = require('path');
const express = require('express');
const controllers = require('./controllers.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('dist'));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
     next();
});

// retreive all observations
app.get('/observations', controllers.requestAll);

app.post('/places', controllers.addPlaces);

app.post('/species', controllers.addSpecies);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
