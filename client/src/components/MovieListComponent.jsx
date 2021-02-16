import React from 'react';

class MovieListComponent extends React.Component {
    constructor(props) {
        super(props);

        // this.state
    }


    render() {
        return (
            <div>
                <div>{this.props.movieListComponent.movieTitle}</div>
            </div>
        )
    }
}




export default MovieListComponent; 