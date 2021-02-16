import React from 'react';

class WatchStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isWatched: null
        }
        this.handleWatchedClick = this.handleWatchedClick.bind(this);
        this.handleUnwatchedClick = this.handleUnwatchedClick.bind(this);
    }

    handleWatchedClick (event) {
        console.log('Click on watched button');
    }

    handleUnwatchedClick(event) {
        console.log('Clicked on unwatched button');

    }

    render() {
        return (
            <div>
                <button
                  onClick={this.handleWatchedClick}
                >Watched</button>
                <button
                  onClick={this.handleUnwatchedClick}
                >Unwatched</button>
            </div>
        )
    }
}



export default WatchStatus;