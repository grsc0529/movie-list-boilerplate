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
    // this.toggleButtonName = this.toggleButtonName.bind(this);
    this.renderWatchedLabel = this.renderWatchedLabel.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  // componentDidMount() {
  //   this.toggleButtonName();
  // }

  // toggleButtonName() {
  //   if (this.props.movieObj.watched) { //true
  //     this.setState({isWatchedMovie: 1, buttonLabel: 'Watched'})
  //     // this.setState({buttonLabel: 'Watched'});
  //   } else {
  //     this.setState({isWatchedMovie: 0, buttonLabel: 'To Watch'})
  //     // this.setState({buttonLabel: 'To Watch'});
  //   }
  // }

  renderWatchedLabel(boolean) {
    if (this.props.movieObj.watched) {
      return 'Watched';
    } else {
      return 'To Watch';
    }

  }

  handleClick(event) {
    event.preventDefault();
    console.log('MovieList Button clicked!')
    
    //When this button is clicked
    //It should trigger an axios request to change the watched property of the current
    //object to be the opposite of it's current state
    console.log(this.props.movieObj);
    var objID = this.props.movieObj.id;
    console.log(objID)
    var antiIsWatchedMovie = !this.state.isWatchedMovie;
    console.log(antiIsWatchedMovie)
    axios.put('/api/movieTable', {
      watched: antiIsWatchedMovie,
      id: objID
    })
      .then(() => this.props.getMovies()/*, this.toggleButtonName()*/)
      .catch((err) => {console.log(err)});
  }

  render() {
    return (
      <tbody>
      <tr>
        <td>{this.props.movieObj.movieTitle}</td>
        {/* <td><button onClick={this.handleClick}>{this.state.buttonLabel}</button></td> */}
        <td><button onClick={this.handleClick}>{this.renderWatchedLabel(this.props.movieObj.watched)}</button></td>

      </tr>
      </tbody>
    )
  }
}

export default MovieList;


