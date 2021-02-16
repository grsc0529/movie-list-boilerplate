import React from 'react';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   movieList = this.props.movieList
    // }

    //Bind Methods
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {
    console.log('Unwatched button clicked!')
    
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


