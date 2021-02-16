import React from 'react';

// const MovieList = ({movies}) => (
//   <div>
//    {movies.map((movie, index) =>
//       <div key={movie.movieTitle + index}>{movie.movieTitle}</div>
//     )}
//   </div>
// );

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    //this.state
  }
  render() {
    return (
      <div>
        {console.log(this.props.movieList)}
      </div>
    )
  }
}


export default MovieList;
