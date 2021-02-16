//Libraries
import React from 'react';
import axios from 'axios';
//Components
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import WatchStatus from './WatchStatus.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      constantMovieList: [],
      movieList: []
    }

    //BIND METHODS
    this.getMovies = this.getMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.specificMovieSearch = this.specificMovieSearch.bind(this);
    this.renderWatchedOrUnwatchedList = this.renderWatchedOrUnwatchedList.bind(this);
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
          constantMovieList: data,
          movieList: data
        })
      });
  };

  //ADD MOVIE TITLE COMPONENT
  addMovie({ textInputFromAdd }){
    console.log(textInputFromAdd);

    axios.post('/api/movieTable', {
      movieTitle: textInputFromAdd, 
      watched: 0
    })
      .then(() => this.getMovies())
      .catch((err) => {console.log(err)}); 
  };

  //SEARCH BAR COMPONENTS
  specificMovieSearch ({ textInputFromSearch }) {    
    var searchResultArr = [];  
    var lowercaseTextInputFromSearch = textInputFromSearch.toLowerCase();
    for (const movie of this.state.constantMovieList) {
      var lowercaseMovieTitle = movie.movieTitle.toLowerCase();
      if (lowercaseMovieTitle.includes(lowercaseTextInputFromSearch)) {
        searchResultArr.push(movie);
      }
    }
    this.setState({movieList: searchResultArr});
  }

  //WATCHED AND UNWATCHED BUTTONS
  renderWatchedOrUnwatchedList(boolean) {
    console.log(typeof boolean)

    var watchedToggleArr = [];

    if (boolean) { //1
      for (var movie of this.state.constantMovieList) {
        if (movie.watched) {
          watchedToggleArr.push(movie);
        }
      }
    } else { //0
      for (var movie of this.state.constantMovieList) {
        if (!movie.watched) {
          watchedToggleArr.push(movie);
        }
      }
    }
    this.setState({movieList: watchedToggleArr})
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
        <WatchStatus 
          renderWatchedOrUnwatchedList={this.renderWatchedOrUnwatchedList}
          />
        <br></br>
        <MovieList 
          movies={this.state.movieList}
        />
      </div>  
    )
  }
}



export default App;