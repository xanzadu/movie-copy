import React from 'react';

var MovieEntry = (props) => (
  !props.movie.isClicked ?
  <div onClick={props.movieClickToggle} id={props.movie.id}>{props.movie.title}</div>:
  <>
  <div onClick={props.movieClickToggle} id={props.movie.id}>{props.movie.title}</div>
  <li>ID: {props.movie.id}</li>
  <li>Avg Score:{props.movie.vote_average}</li>
  <li>Release Date: {props.movie.release_date}</li>
  <li>Watched:
  <input type="checkbox" onClick={props.movieEntryWatchToggle} defaultChecked={props.movie.is_watched===1} id={props.movie.id}/>
  </li>
  </>

);

export default MovieEntry;