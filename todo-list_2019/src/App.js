import React, { Component} from "react";
import './App.css';
import Todos from "./components/Todos.js";
// import TodoItem from "./components/TodoItem";

class App extends Component {
  state = {
    todos: [
      { id: 1, title:"Flight my plane ",      completed: true },
      { id: 2, title:"Dinner with",           completed: false },
      { id: 3, title:"Meeting the employees", completed: false }
    ]
  }

  
  markCompleted = (id) => {
    // console.log(id)
    this.setState({  todos: this.state.todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
      
    })  })
  }

  markC
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markCompleted= {this.markCompleted}/>
      </div>
    );
  }
}

export default App;
