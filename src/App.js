import React, { Component } from 'react';
import Project from "./Component/Project";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      project: [ 
        { 
          team : "Seahawks",
          city : " Seattle",
          fild : "centrylink"
        },
        { 
          team : "Raiders",
          city : "Okland",
          fild : "okl"
        },
        { 
          team : "Patriots",
          city : "new england ",
          fild : "new"}, 

      ],
      todos:[],
      toAdd:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleChange(event){
    const nextTodoToAdd = event.target.value;
    this.setState({
      toAdd: nextTodoToAdd
  
    }); 
  }
  handleClick(event){
    const nextTodos = this.state.todos.concat(this.state.toAdd);
    const nextTodoAdd = '';

    this.setState({
      todos: nextTodos, 
      toAdd: nextTodoAdd
      
    });
  }

    
  

  render() {
    return (
      <div className="App">
        
        <div className = "propbady">
            Top three teams <br/>
            <Project project={this.state.project}/>
        </div>
        <div className = "statebody">
          <ul>
            {this.state.todos.map((todo, index) => <li key={index}>{todo}</li>)}
          </ul>
          <input 
              type = "text" 
              placeholder="score pridiction" 
              value={this.state.toAdd}
              onChange={this.handleChange}/>
              <button onClick ={ this.handleClick}> your pridict</button>
        </div>

      </div>
      
    );
  };
}


export default App;
