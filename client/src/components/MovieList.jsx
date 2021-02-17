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


  handleClick(event) {
    console.log('Unwatched button clicked!')
    axios.put(`/api/movieTable/${this.props.movieObj.id}`)
      .then(res => {
        this.setState({items: res.data});
        this.props.history.push('/movieTable');
      })
      .catch(err => (console.log(err)));
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


