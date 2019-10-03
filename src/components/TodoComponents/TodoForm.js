// `<TodoForm>` will hold your input field and your `Add Todo` and 
// `Clear Completed` buttons.

import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state={
            value: ''
        }
    }

    handleChange = event => {
        event.preventDefault()

        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state.value)
        this.props.addItem(event, this.state.value)

        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                <button type='submit'>Add Todo</button>

                <button onClick={this.props.completed}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;