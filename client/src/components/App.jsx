import React from 'react';
import MovieList from './MovieList.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App = () => (
  <div>
    <MovieList movies={movies}/>
  </div>  
);

export default App;