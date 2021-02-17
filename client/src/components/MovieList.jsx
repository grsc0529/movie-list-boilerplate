import React from 'react';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

    //Bind Methods
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
    var clickedMovieObjMovieTitle = this.props.movieObj.movieTitle;
    var antiIsWatchedMovie = !this.props.movieObj.watched;
    this.props.changeWatchedInMovieObj({clickedMovieObjMovieTitle, antiIsWatchedMovie});
  }

  render() {
    return (
      <tbody>
      <tr>
        <td>{this.props.movieObj.movieTitle}</td>
        <td><button onClick={this.handleClick}>{this.renderWatchedLabel(this.props.movieObj.watched)}</button></td>

      </tr>
      </tbody>
    )
  }
}

export default MovieList;


