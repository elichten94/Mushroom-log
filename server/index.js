const path = require('path');
const express = require('express');
const controllers = require('./controllers.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('dist'));

// retreive all observations
app.get('/observations', controllers.requestAll);

app.post('/places', controllers.addPlaces);

app.post('/species', controllers.addSpecies);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
