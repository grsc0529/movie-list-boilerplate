import React from 'react';

class SearchBar extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            textInputFromSearch: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick(event) {
        event.preventDefault();
        // console.log('Click on Search Bar');
        // console.dir(event);
        this.props.specificMovieSearch(this.state);
    }


    render() {
        return (
            <form onClick={this.handleClick}>
                <input 
                  name="textInputFromSearch"
                  value={this.state.textInputFromSearch}
                  onChange={this.handleChange}
                  ></input>
                <button>Search</button>
            </form>
        )
    }
}

export default SearchBar;


//Add a search bar so that a user may see if a movie is in the list
//After a user submits the search, display all the matches (or partial matches) to that title 
//BONUS: handle the case of "no movie by that name found" gracefully


/*
1. Create a search bar so when a user types to see if a movie is in the list,
they can see all the partial or full matches to the title 

2.
*/