import React from 'react';
import axios from 'axios';
import MovieList from './MovieList.jsx';
import Forms from './Forms.jsx';

const url = 'https://api.themoviedb.org/3/search/movie?'
const api_key = 'api_key=270415b460509399b4e446588a2fe3d2&language=en-US&query='

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesChosen: [],
      allLoadedMovies: []
    };

    this.getMovies = this.getMovies.bind(this);
    this.search = this.search.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.movieClickToggle = this.movieClickToggle.bind(this);
    this.movieEntryWatchToggle = this.movieEntryWatchToggle.bind(this);
    this.watchButtonToggle = this.watchButtonToggle.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    axios.get('/api/movies')
      .then((results) => {
        var movies = results.data
        // var filteredMovies = [];
        // filteredMovie.push(results.data);
        movies.forEach((movie) => {
          movie.isClicked = false;
        })
        this.setState({
          moviesChosen: movies,
          allLoadedMovies: movies
        })
      })
  }

  search(value) {
    var movies = this.state.allLoadedMovies;
    var filteredMovies = [];
    movies.forEach((movie) => {
      movie.title.match(value) ? filteredMovies.push(movie):null;
    });
    filteredMovies.length > 0 ? this.setState({moviesChosen: filteredMovies}):
    alert('No movies match this description!');
  }

  addMovie(value) {
    value = value.replace(' ', '%20');
    axios.get(`${url}${api_key}${value}&page=1&include_adult=false`)
      .then((response) => {
        var movie = response.data.results[0]
        axios.post('/api/movies', movie)
      })
      .then(this.getMovies)
  }

  movieClickToggle(event) {
    var id = event.target.id;
    var movies = this.state.moviesChosen;
    movies.forEach((movie) => {
      movie.id === Number(id) ? movie.isClicked = !movie.isClicked:null
    })
    this.setState({
      moviesChosen: movies
    })
  }

  movieEntryWatchToggle(event) {
    var id = event.target.id;
    var movies = this.state.moviesChosen;
    movies.forEach((movie) => {
      if(movie.id === Number(id)) {
        movie.is_watched = !movie.is_watched
        axios.put('/api/movies', {
          id: movie.id,
          is_watched: movie.is_watched})
      }
    })
  }

  watchButtonToggle(event) {
    var watched = event.target.name === "watched"? true:false
    var movies = this.state.allLoadedMovies;
    var filteredMovies = [];
    movies.forEach((movie) => {
      if (watched == movie.is_watched) {
        filteredMovies.push(movie);
      }
    })
    this.setState({
      moviesChosen: filteredMovies
    })
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <Forms search={this.search} addMovie={this.addMovie} watchButtonToggle={this.watchButtonToggle}/>
        <MovieList movies={this.state.moviesChosen} movieClickToggle={this.movieClickToggle} movieEntryWatchToggle={this.movieEntryWatchToggle}/>
      </div>
    );
  }
}

export default App;