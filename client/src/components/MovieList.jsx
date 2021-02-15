import React from 'react';

const MovieList = (props) => (
  <ul>
    {props.movies.map((movie, index) =>
      <li key={movie.movieTitle + index}>{movie.movieTitle}</li>
    )}
  </ul>
);


export default MovieList;