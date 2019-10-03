// `<TodoForm>` will hold your input field and your `Add Todo` and 
// `Clear Completed` buttons.

import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            value: ''
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                <button>Add Todo</button>

                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;