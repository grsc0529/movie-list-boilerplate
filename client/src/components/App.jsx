import React from 'react';
import MovieList from './MovieList.jsx';
import moviesData from '../data/moviesData.js';


const App = () => (
  <div>
    <MovieListSearch />
    <MovieList 
      moviesData={moviesData}
    /> 
  </div>
);



export default App;