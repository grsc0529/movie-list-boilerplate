// import React from 'react';

// class WatchStatus extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             isWatched: null
//         }

//         this.handleWatchedChange = this.handleWatchedChange.bind(this);
//         this.handleWatchedClick = this.handleWatchedClick.bind(this);

//         this.handleUnwatchedClick = this.handleUnwatchedClick.bind(this);
//     }
//     //WATCH BUTTON
//     handleWatchedChange (event) {
//         this.setState({
//             isWatched: true //1
//         });
        
//     }

//     handleWatchedClick (event) {
//         event.preventDefault();
//         console.log('Click on watched button');
//         this.props.renderWatchedOrUnwatchedList(this.state);
//     }


//     //UNWATCH BUTTON
//     handleUnwatchedClick(event) {
//         console.log('Clicked on unwatched button');

//     }

//     render() {
//         return (
//             <div>
//                 <form 
//                 id="button-watched-form"
//                 onChange={this.handleWatchedChange}
//                 ></form>
//                 <button
//                   form="button-watched-form"
//                   name="isWatched"
//                   onClick={this.handleWatchedClick}
//                 >Watched</button>

//                 <form id="button-unwatched-form"></form>
//                 <button
//                   onClick={this.handleUnwatchedClick}
//                 >Unwatched</button>
//             </div>
//         )
//     }
// }



// export default WatchStatus;


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
              <button onClick={this.handleUnwatchedClick}>Unwatched</button>
            </div>

        )
    }
}



export default WatchStatus;