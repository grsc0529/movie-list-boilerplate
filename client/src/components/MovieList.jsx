import React from 'react';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    
    //Bind Methods
    this.renderWatchedLabel = this.renderWatchedLabel.bind(this);
    this.handleWatchedButtonClick = this.handleWatchedButtonClick.bind(this);

  }

  renderWatchedLabel(boolean) {
    if (this.props.movieObj.watched) {
      return 'Watched';
    } else {
      return 'To Watch';
    }
  }

  handleMovieTitleClick(event) {
    event.preventDefault();
    console.log('Movie Title Was Clicked');
  }

  handleWatchedButtonClick(event) {
    event.preventDefault();
    var clickedMovieObjMovieTitle = this.props.movieObj.movieTitle;
    var antiIsWatchedMovie = !this.props.movieObj.watched;
    this.props.changeWatchedInMovieObj({clickedMovieObjMovieTitle, antiIsWatchedMovie});
  }

  render() {
    return (
      <tbody>
      <tr>
        <td onClick={this.handleMovieTitleClick}>{this.props.movieObj.movieTitle}</td>
        <td><button onClick={this.handleWatchedButtonClick}>{this.renderWatchedLabel(this.props.movieObj.watched)}</button></td>
      </tr>
      </tbody>
    )
  }
}

export default MovieList;


