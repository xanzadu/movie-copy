const db = require('../db')

module.exports = {
  getMovies: (callback) => {
    db.query(`SELECT * FROM movies`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  postMovies: (movieObj, callback) => {
    db.query(`INSERT INTO movies (id, title, vote_average, release_date, is_watched) VALUES (?)`, [[movieObj.id, movieObj.title,movieObj.vote_average,movieObj.release_date, movieObj.is_watched]], (err) => {
      console.log(err)
      if(err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  },

  updateMovies: (movieObj, callback) => {
    db.query(`UPDATE movies SET is_watched = ? WHERE id = ?`,[[movieObj.is_watched], [movieObj.id]], (err) => {
      console.log(err)
      if(err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  },

}