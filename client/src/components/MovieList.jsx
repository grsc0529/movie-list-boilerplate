import React from 'react';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   movieList = this.props.movieList
    // }
  }
  render() {
    return (
      <tr>
        <td>{this.props.movieObj.movieTitle}</td>
        <td><button>Unwatched</button></td>
      </tr>
    )
  }
}



export default MovieList;


