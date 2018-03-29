import React, { Component } from 'react'
import { ToDoInputForm } from '../index'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentToDoInput: ''
    }
    this.handleToDoInputChange = this.handleToDoInputChange.bind(this)
  }

  handleToDoInputChange(e) {
    this.setState({ currentToDoInput: e.target.value })
  }

  render() {
    return (
      <div className='todo-Main-Container'>
        <h3>Todo List:</h3>
        <ToDoInputForm onChange={this.handleToDoInputChange} value={this.state.currentToDoInput} />
      </div>
    )
  }
}


module.exports = Todo