import React from 'react'

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      addValue: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleMovieSearch = this.handleMovieSearch.bind(this);
    this.handleMovieAdd = this.handleMovieAdd.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleMovieSearch(event) {
    event.preventDefault();
    this.props.search(this.state.searchValue);
  }

  handleMovieAdd(event) {
    event.preventDefault();
    this.props.addMovie(this.state.addValue)
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleMovieAdd}>
        <label>
          <input placeholder="Add movie title here" name="addValue" type="text" value={this.state.addValue} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add" />
      </form>
      <form onSubmit={this.handleMovieSearch}>
        <label>
          <input placeholder="Search..." name="searchValue" type="text" value={this.state.searchValue} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Go!" />
      </form>
      <button onClick={this.props.watchButtonToggle} name="watched">Watched</button>
      <button onClick={this.props.watchButtonToggle} name="toWatch">To Watch</button>
      </div>
    );
  }
}

export default Forms;