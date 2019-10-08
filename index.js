const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express()
const port = 3000
const routes = require('./routes');

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(routes);

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname,'index.html'));
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
});

