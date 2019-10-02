import React from 'react';

import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();

    this.state={
      toDo: [{
        task: null,
        id: Date.now(),
        completed: false
      }]
    }
  }

  render() {
    return (
      <div className='App'>

        <div className='header'>
          <h2>Your To Do App</h2>
          </div>

        <div className='to-do-list'>
          {this.state.toDo.map(item => {
            <Todo 
              key={item.id} 
              item={task} />
          })}
        </div>

      </div>
    );
  }
}

export default App;
 