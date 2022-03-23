const models = require('./models.js');

module.exports = {
  get: (req, res) => {
    models.getMovies((err, results) => {
      if (err) {
        res.status(404).send('Failed to connect.')
      } else {
        res.status(200).send(results);
      }
    })
  },

  post: (req, res) => {
    models.postMovies(req.body, (err) => {
      if (err) {
        res.status(404).send('Failed to post object')
      } else {
       res.status(201).send('Movie added successfully.');
     }
   })
  },

  put: (req, res) => {
    models.updateMovies(req.body, (err) => {
      if (err) {
        res.status(404).send('Failed to post object')
      } else {
       res.status(201).send('Movie updated successfully.');
     }
   })
  }
}