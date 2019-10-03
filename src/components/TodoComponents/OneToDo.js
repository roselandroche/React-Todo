// `<Todo />` is a component that takes in the `todo` data and displays 
// the task to the screen

import React from 'react';

const OneToDo = props => {
    return (
        <div>
            <p>{props.item.task}</p>
        </div>
    )
}

export default OneToDo;