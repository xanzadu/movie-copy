import React from 'react';
import MovieEntry from './MovieEntry.jsx'

var MovieList = (props) => (
  // console.log(props.movies)
  props.movies.map((movie) => (
    <MovieEntry key={movie.id} movie={movie} movieClickToggle={props.movieClickToggle} movieEntryWatchToggle={props.movieEntryWatchToggle}/>
    )
  )
)

export default MovieList;