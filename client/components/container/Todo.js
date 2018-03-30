import React, { Component } from 'react'
import { ToDoInputForm } from '../index'
import { connect } from 'react-redux'
import { addNewTodo, fetchAllTodos } from '../../reducers/todos'
import Paper from 'material-ui/Paper'
import { ToDoList } from '../index'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentToDoInput: '',
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
    return (
      <div className='todo-Main-Container'>
        <div className='todo-Form-Container'>
          <p>Todo List:</p>
          <ToDoInputForm
            onChange={this.handleToDoInputChange}
            value={this.state.currentToDoInput}
            onSubmit={this.handleSubmit}
          />
        </div>
        <div className='todo-List-Container'>
          <ToDoList todos={this.props.todos} />
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
