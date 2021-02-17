import React from 'react';

class WatchStatus extends React.Component {
    constructor(props) {
        super(props);

        this.handleWatchedClick = this.handleWatchedClick.bind(this);
        this.handleUnwatchedClick = this.handleUnwatchedClick.bind(this);
    }

    handleWatchedClick(event) {
        this.props.renderWatchedOrUnwatchedList(1);
    }

    handleUnwatchedClick(event) {
        this.props.renderWatchedOrUnwatchedList(0);
    }

    render() {
        return (
            <div>
              <button onClick={this.handleWatchedClick}>Watched</button>
              <button onClick={this.handleUnwatchedClick}>To Watch</button>
            </div>
        )
    }
}



export default WatchStatus;