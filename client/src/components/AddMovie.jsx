import React from 'react';

class AddMovie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textInputFromAdd: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Clicked on Add Movie');
    }

    render() {
        return (
            <form>
                <input></input>
                <button onClick={this.handleClick}>Add Movie</button>
            </form>
        )
    }

}

export default AddMovie;