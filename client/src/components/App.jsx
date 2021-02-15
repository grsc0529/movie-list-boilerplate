import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';

// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
    //this.state
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <MovieList movies={movies}/>
      </div>  
    )
  }
}



export default App;