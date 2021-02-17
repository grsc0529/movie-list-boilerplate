import React from 'react';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowingMovieInfo: false
    }
    
    //Bind Methods
    this.renderWatchedLabel = this.renderWatchedLabel.bind(this);
    this.handleWatchedButtonClick = this.handleWatchedButtonClick.bind(this);
    this.handleMovieTitleClick = this.handleMovieTitleClick.bind(this);
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
    var antiCurrentState = !this.state.isShowingMovieInfo;
    this.setState({isShowingMovieInfo: antiCurrentState});
    console.log(this.state.isShowingMovieInfo)
  }

  handleWatchedButtonClick(event) {
    event.preventDefault();
    var clickedMovieObjMovieTitle = this.props.movieObj.movieTitle;
    var antiIsWatchedMovie = !this.props.movieObj.watched;
    this.props.changeWatchedInMovieObj({clickedMovieObjMovieTitle, antiIsWatchedMovie});
  }

  render() {
    if (this.state.isShowingMovieInfo) {
      var additionalMovieInfo =
          <tr>
            <td>Release Year: <em>{this.props.movieObj.releaseYear}</em></td>
            <td>Metascore: <em>{this.props.movieObj.metascore}</em></td>
            <td>IMBD Rating: <em>{this.props.movieObj.IMBDrating}</em></td>
            <td>PERSONAL RATING</td>
            <td><button onClick={this.handleWatchedButtonClick}>{this.renderWatchedLabel(this.props.movieObj.watched)}</button></td>
          </tr>
    }

    return (
      <tbody>
      <tr>
        <td onClick={this.handleMovieTitleClick}>{this.props.movieObj.movieTitle}</td>
      </tr>
      {additionalMovieInfo}
      </tbody>
    )
  }
}

export default MovieList;


