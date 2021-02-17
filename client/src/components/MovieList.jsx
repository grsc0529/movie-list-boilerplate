import React from 'react';
import axios from 'axios';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // isWatchedMovie: this.props.movieObj.watched,
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
      this.setState({buttonLabel: 'Watched'});
    } else {
      this.setState({buttonLabel: 'To Watch'});
    }
  }

  handleClick(event) {
    console.log('MovieList Button clicked!')
    // axios.put(`/api/movieTable/`)
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


