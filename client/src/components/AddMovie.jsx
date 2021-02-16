import React from 'react';

class AddMovie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textInputFromAdd: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick(event) {
        event.preventDefault();
        this.props.addMovie(this.state);
    }

    render() {
        return (
            <form>
                <input
                  name="textInputFromAdd"
                  value={this.state.textInputFromAdd}
                  onChange={this.handleChange}
                ></input>
                <button onClick={this.handleClick}>Add Movie</button>
            </form>
        )
    }

}

export default AddMovie;