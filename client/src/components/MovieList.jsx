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
 
    console.log('clicked movie: ', this.props.movieObj);

    var objID = this.props.movieObj.id;
    console.log('object id of clicked movie: ', objID)
    var antiIsWatchedMovie = !this.props.movieObj.watched;
    console.log('opposite of current "watched" property: ', antiIsWatchedMovie)

    this.props.changeWatchedInMovieObj({objID, antiIsWatchedMovie});
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


