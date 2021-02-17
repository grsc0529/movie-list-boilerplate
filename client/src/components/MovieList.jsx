import React from 'react';

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

    var clickedMovieObjMovieTitle = this.props.movieObj.movieTitle;
    var antiIsWatchedMovie = !this.props.movieObj.watched;
    console.log('object title of clicked movie: ', clickedMovieObjMovieTitle, 'opposite of current "watched" property: ', antiIsWatchedMovie)
    
    this.props.changeWatchedInMovieObj({clickedMovieObjMovieTitle, antiIsWatchedMovie});
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


