import React from 'react';
import MovieListComponent from './MovieListComponent';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   movieList = this.props.movieList
    // }
  }
  render() {
    return (
      <div>
        <div>{this.props.movieObj.movieTitle}</div>
        <button>Unwatched</button>
      </div>
    )
  }
}



export default MovieList;


