import React from 'react';

const MovieList = ({movies}) => (
  <div>
   {movies.map((movie, index) =>
      <div key={movie.movieTitle + index}>{movie.movieTitle}</div>
    )}
  </div>
);


export default MovieList;
