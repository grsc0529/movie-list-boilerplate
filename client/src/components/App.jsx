//Libraries
import React from 'react';
import axios from 'axios';
//Components
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    }

    //BIND METHODS
    this.getMovies = this.getMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.specificMovieSearch = this.specificMovieSearch.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  //INITIAL LOAD
  getMovies() {
    axios.get('/api/movieTable')
      .then(({ data }) => {
        console.log('original data: ', data)
        this.setState({
          movieList: data
        })
      });
  };

  //ADD MOVIE TITLE COMPONENT
  addMovie({textInputFromAdd}){
    if (textInputFromAdd.length > 0) {
      var addedMovieArr = this.state.movieList;
      addedMovieArr.push({movieTitle: textInputFromAdd})
      this.setState({movieList: addedMovieArr})
    }
  };

  //SEARCH BAR COMPONENTS
  specificMovieSearch ({ textInputFromSearch }) {    
    var searchResultArr = [];  
    var lowercaseTextInputFromSearch = textInputFromSearch.toLowerCase();
    for (const movie of this.state.movieList) {
      var lowercaseMovieTitle = movie.movieTitle.toLowerCase();
      if (lowercaseMovieTitle.includes(lowercaseTextInputFromSearch)) {
        searchResultArr.push(movie);
      }
    }
    this.setState({movieList: searchResultArr});
  }


  render() {
    return (
      <div>
        <h3>Movie List</h3>
        <AddMovie
          addMovie={this.addMovie}
        />
        <SearchBar 
          specificMovieSearch={this.specificMovieSearch}
        />
        <br></br>
        <button>Watched</button>
        <button>Unwatched</button>
        <br></br>
        <br></br>
        <MovieList 
          movies={this.state.movieList}
        />
      </div>  
    )
  }
}



export default App;