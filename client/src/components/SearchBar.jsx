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
            <form>
                <input 
                  name="textInputFromSearch"
                  value={this.state.textInputFromSearch}
                  onChange={this.handleChange}
                  ></input>
                <button onClick={this.handleClick}>Search</button>
            </form>
        )
    }
}

export default SearchBar;
