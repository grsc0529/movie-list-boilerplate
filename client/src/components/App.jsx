import React from 'react';
import axios from 'axios';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    }
    this.getMovies = this.getMovies.bind(this);
    this.specificMovieSearch = this.specificMovieSearch.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  //inital load
  getMovies() {
    axios.get('/api/movieTable')
      .then(({ data }) => {
        console.log(data)
        this.setState({ movieList: data })
      });
    };

  //re-render based on search
  specificMovieSearch ({ textInputFromSearch }) {    
    var searchResultArr = [];  
    var lowercaseTextInputFromSearch = textInputFromSearch.toLowerCase();
    for (const movie of this.state.movieList) {
      var lowercaseMovieTitle = movie.movieTitle.toLowerCase();
      if (lowercaseMovieTitle.includes(lowercaseTextInputFromSearch)) {
        searchResultArr.push(movie);
      }
    }
    // console.log(searchResultArr);
    if (searchResultArr.length === 0) {
      this.setState({movieList: []});
    } else {
      this.setState({movieList: searchResultArr});
    }
    
  }

  render() {
    return (
      <div>
        <h3>Movie List</h3>
        <SearchBar 
          specificMovieSearch={this.specificMovieSearch}
        />
        <MovieList 
          movies={this.state.movieList}
        />
      </div>  
    )
  }
}



export default App;