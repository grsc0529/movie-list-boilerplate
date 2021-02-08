import React from 'react';


const MovieList = (props) => (
    <div>
        {props.moviesData.map((movie) =>
          <div>{movie.title}</div>
        )}
    </div>
    
)
export default MovieList;