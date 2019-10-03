import React from 'react';

// import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()

    this.state={
      toDo: [
        {
        task: 'Build this app!',
        id: 1,
        completed: false
        }
      ]
    }
  }

  addItem = (event, taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }

    console.log(newTask)
    this.setState({
      toDo: [newTask, ...this.state.toDo]
    })
  }

  completed = event => {
    event.preventDefault()

    this.setState({
      toDo: this.state.toDo.filter(item => {
        return !item.completed
      })
    })
  }

  

  render() {
    return (
      <div className='App'>

        <div className='header'>
          <h2>The To Do App!</h2>
        </div>

        <div className='to-do-list'>
          <TodoList 
            // key={this.state.id}
            item={this.state.task}
            toDo={this.state.toDo}
          />
        </div>

        <TodoForm 
          addItem={this.addItem} 
          completed={this.completed}
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
        />

      </div>
    );
  }
}

export default App;
 