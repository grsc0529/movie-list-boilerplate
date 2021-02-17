import React from 'react';
import axios from 'axios';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isWatchedMovie: null,
      buttonLabel: ''
    }

    //Bind Methods
    this.toggleButtonName = this.toggleButtonName.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    this.toggleButtonName();
  }

  toggleButtonName() {
    if (this.props.movieObj.watched) { //true
      this.setState({isWatchedMovie: 1})
      this.setState({buttonLabel: 'Watched'});
    } else {
      this.setState({isWatchedMovie: 0})
      this.setState({buttonLabel: 'To Watch'});
    }
  }

  handleClick(event) {
    console.log('MovieList Button clicked!')
    //When this button is clicked
    //It should trigger an axios request to change the watched property of the current
    //object to be the opposite of it's current state
    // axios.put('/api/movieTable', {
    //   watched: !this.state.isWatchedMovie,
    //   id: this.props.movieObj.id
    // })
    //   .then(() => this.props.getMovies())
    //   .catch((err) => {console.log(err)});
  }

  render() {
    return (
      <tbody>
      <tr>
        <td>{this.props.movieObj.movieTitle}</td>
        <td><button onClick={this.handleClick}>{this.state.buttonLabel}</button></td>
      </tr>
      </tbody>
    )
  }
}

export default MovieList;


