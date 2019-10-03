// `<TodoForm>` will hold your input field and your `Add Todo` and 
// `Clear Completed` buttons.

import React from 'react';

class TodoForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input
                    type='text'
                    value={this.props.value}
                    onChange={this.props.handleChange}
                />

                <button onClick={this.props.addItem}>Add Todo</button>

                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;