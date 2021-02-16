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
      movieList: [],
      manipulatedMovieList: [] //---> I want this list to be reference to result of search
    }

    //Bind methods
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
          movieList: data,
          manipulatedMovieList: data
        })
      });
  };

  //ADD MOVIE TITLE COMPONENT
  addMovie({textInputFromAdd}){
    if (textInputFromAdd.length > 0) {
      var addedMovieArr = this.state.manipulatedMovieList;
      addedMovieArr.push({movieTitle: textInputFromAdd})
      this.setState({manipulatedMovieList: addedMovieArr})
    }
  };


  //SEARCH BAR COMPONENTß
  specificMovieSearch ({ textInputFromSearch }) {    
    var searchResultArr = [];  
    var lowercaseTextInputFromSearch = textInputFromSearch.toLowerCase();
    for (const movie of this.state.movieList) {
      var lowercaseMovieTitle = movie.movieTitle.toLowerCase();
      if (lowercaseMovieTitle.includes(lowercaseTextInputFromSearch)) {
        searchResultArr.push(movie);
      }
    }
    this.setState({manipulatedMovieList: searchResultArr});
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
        <MovieList 
          movies={this.state.manipulatedMovieList}
        />
      </div>  
    )
  }
}



export default App;