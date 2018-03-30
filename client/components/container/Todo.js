import React, { Component } from 'react'
import { ToDoInputForm } from '../index'
import { connect } from 'react-redux'
import { addNewTodo, fetchAllTodos } from '../../reducers/todos'
import Paper from 'material-ui/Paper'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentToDoInput: ''
    }
    this.handleToDoInputChange = this.handleToDoInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getAllTodosDispatch()
  }

  handleToDoInputChange(e) {
    this.setState({ currentToDoInput: e.target.value })
  }

  handleSubmit(e, todo) {
    this.props.handleSubmitDispatch(todo)
    this.setState({ currentToDoInput: '' })
  }


  render() {
    const todoList = this.props.todos ? this.props.todos.map(todo => (
      <Paper
        className='todo-Paper'
        zDepth={1}
      >
        <div className='todo-Item'>
          <li key={todo.id}>{todo.data}</li>
        </div>
      </Paper>
    )) : 'loading'
    return (
      <div className='todo-Main-Container'>
        <h3>Todo List:</h3>
        <ToDoInputForm
          onChange={this.handleToDoInputChange}
          value={this.state.currentToDoInput}
          onSubmit={this.handleSubmit}
        />
        <div className='todo-List-Container'>
          <ul className='todoList'>
            {todoList}
          </ul>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    todos: state.todos
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleSubmitDispatch(todo) {
      dispatch(addNewTodo(todo))
    },
    getAllTodosDispatch() {
      dispatch(fetchAllTodos())
    }
  }
}


export default connect(mapState, mapDispatch)(Todo)
