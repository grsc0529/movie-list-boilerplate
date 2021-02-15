import React from 'react';

class SearchBar extends React.Component {
    constructor (props) {
        super(props);

    }


    render() {
        return (
            <form>
                <input type="text"></input>
                <button>Search</button>
            </form>
        )
    }
}



export default SearchBar;


//Add a search bar so that a user may see if a movie is in the list
//After a user submits the search, display all the matches (or partial matches) to that title 
//BONUS: handle the case of "no movie by that name found" gracefully