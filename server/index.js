const express = require('express');
const controller = require('./controller.js');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));

app.use(express.json());

app.get('/api/movies', controller.get);
app.post('/api/movies', controller.post);
app.put('/api/movies', controller.put);

// app.post()

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})