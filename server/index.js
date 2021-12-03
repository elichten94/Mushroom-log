const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.status.send('hello world!');
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
