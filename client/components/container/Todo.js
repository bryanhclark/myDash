import React, { Component } from 'react'
import { ToDoInputForm, ToDoList, VisibilityFilterButtons } from '../index'
import { connect } from 'react-redux'
import { addNewTodo, fetchAllTodos } from '../../reducers/todos'
import { setVisibilityFilterDispatch, filterTodos } from '../../reducers/visibilityFilter'
import Paper from 'material-ui/Paper'


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
    let todoList = filterTodos(this.props.todos, this.props.visibilityFilter)
    return (
      <div className='todo-Main-Container'>
        <p>Todo List:</p>
        <ToDoInputForm
          onChange={this.handleToDoInputChange}
          value={this.state.currentToDoInput}
          onSubmit={this.handleSubmit}
        />
        <VisibilityFilterButtons handleFilterChange={this.props.handleFilterChange} />
        <div className='todo-List-Container'>
          <ToDoList todos={todoList} handleToggle={this.props.handleToggle} />
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleSubmitDispatch(todo) {
      dispatch(addNewTodo(todo))
    },
    getAllTodosDispatch() {
      dispatch(fetchAllTodos())
    },
    handleFilterChange(filter) {
      dispatch(setVisibilityFilterDispatch(filter))
    }

  }
}


export default connect(mapState, mapDispatch)(Todo)
