import React from 'react';
import axios from 'axios';
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
    this.state = {
      movieList: []
    }
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    axios.get('/api/movieTable')
      .then(({ data }) => {
        console.log(data)
        this.setState({ movieList: data })
      });
    };

  render() {
    return (
      <div>
        <h3>{'Movie List'}</h3>
        <SearchBar/>
        <MovieList movies={this.state.movieList}/>
      </div>  
    )
  }
}



export default App;