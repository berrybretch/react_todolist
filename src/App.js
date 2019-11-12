import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import uuid from 'uuid'



export class App extends React.Component {
  
  state = {
    todos:[
      {
        id:uuid.v4(),
        title:'Take out the trash',
        completed:false
      },
      {
        id:uuid.v4(),
        title:'Eat out wife',
        completed:false
      },
      {
        id:uuid.v4(),
        title:'Move Merch to storage',
        completed:false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos:this.state.todos.map( todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      }) })
  }

  delete = (id) => {
    this.setState({
      todos:[...this.state.todos.filter(todo => todo.id !== id)]
    })    
  }
  addNew = (title) => {
    const newTodo = {
      title,
      id:uuid.v4(),
      completed:false
    }
    this.setState({
      todos:[...this.state.todos, newTodo]
    })    
  }




  render() {
    return (
      <Router>
        <div className='App'>
        <div className='Container'>
          <Header />
          <Route  exact
            path='/'
            render={props => (
              <React.Fragment>
                 <AddTodo addNew = {this.addNew}/>
          <Todos todos={this.state.todos} markComplete = {this.markComplete} delete = {this.delete}/>
              </React.Fragment>
            )}
          
          />
          <Route path='/about'
           component= {About}/>
          
        </div>
      </div>
      </Router>
    );
  }
}



export default App;

