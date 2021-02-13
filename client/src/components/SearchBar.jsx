import React from 'react';

class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        //this.state
        this.state = false;
    }

    handleSubmit(event) {
        //when the user inputs the onSubmit 
        //the app should be re-rendered the input list on only display the movies that match (partially or fully)
        event.preventDefault();
        console.log('button has been clicked');
    }

    render() {
        return (
            <form>
                <input type="text"></input>
                <button onSubmit={this.handleSubmit}>Search</button>
            </form>
        )
    }
}



export default SearchBar;


//Add a search bar so that a user may see if a movie is in the list
//After a user submits the search, display all the matches (or partial matches) to that title 
//BONUS: handle the case of "no movie by that name found" gracefully