//Libraries
import React from 'react';
import axios from 'axios';
//Components
import AddMovie from './AddMovie.jsx';
import SearchBar from './SearchBar.jsx';
import WatchStatus from './WatchStatus.jsx';
import MovieList from './MovieList.jsx';

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

  //ADD MOVIE COMPONENT
  addMovie({ textInputFromAdd }){
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

  //RE-RENDER WATCHED BUTTON OF MOVIE LIST COMPONENT
  changeWatchedInMovieObj( {objID, antiIsWatchedMovie } ) {
    console.log('info passed back to changeWatchedInMovieObj in App.jsx: ', objID, antiIsWatchedMovie);
    axios.put('/api/movieTable', {
      watched: antiIsWatchedMovie,
      id: objID
    })
      .then(() => this.props.getMovies())
      .catch((err) => {console.log(err)});

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
        <table>
          {this.state.movieList.map((movieObj) => {
            return (
              <MovieList 
                key={movieObj.movieTitle} 
                movieObj={movieObj}
                // getMovies={this.getMovies}
                changeWatchedInMovieObj={this.changeWatchedInMovieObj}
              />
            )
          })}
        </table>
      </div>  
    )
  }
}



export default App;