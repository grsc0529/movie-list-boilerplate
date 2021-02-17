import React from 'react';
import axios from 'axios';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   isWatchedMovie: this.props.movieTitle.watched,
    //   buttonLabel: ''
    // }

    //Bind Methods
    this.handleClick = this.handleClick.bind(this);
  }

  toggleButtonName() {
    // if (this.props.movieObj.watched) { //true
    //   this.setState({buttonLabel: 'Watched'});
    // } else {
    //   this.setState({buttonLabel: 'To Watch'});
    // }

  }


  handleClick(event) {
    console.log('Unwatched button clicked!')
    // axios.put(`/api/movieTable/`)
  }

  render() {
    return (
      <tbody>
      <tr>
        <td>{this.props.movieObj.movieTitle}</td>
        <td><button onClick={this.handleClick}>Unwatched</button></td>
      </tr>
      </tbody>
    )
  }
}



export default MovieList;


