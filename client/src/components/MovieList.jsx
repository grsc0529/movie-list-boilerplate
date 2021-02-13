import React from 'react';

const MovieList = (props) => (
  <ul>
    {/* {console.log(props.movies)} */}
    {props.movies.map((movie) =>
      <li key={movie.title}>{movie.title}</li>
    )}
  </ul>
);


export default MovieList;