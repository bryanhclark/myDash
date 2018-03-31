import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import { Button } from '../index'
import { connect } from 'react-redux'
import { deleteToDo, toggleTodoThunk } from '../../reducers/todos'
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit'



class PaperDiv extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverIndex: 1,
      buttonClass: 'button-Invisible'
    }
    this.onMouseOut = this.onMouseOut.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
  }

  onMouseOver = () => this.setState({
    hoverIndex: 2,
    buttonClass: 'button-Visible'
  })
  onMouseOut = () => this.setState({
    hoverIndex: 1,
    buttonClass: 'button-Invisible'
  })



  render() {
    return (
      <div
        className='todo-List-Item-Container'
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}>
        <Paper
          className='paper-Container'
          zDepth={this.state.hoverIndex}
        >
          {this.props.children}
        </Paper>
        <Button
          onClick={(e) => this.props.handleDelete(e, this.props.children.props.todo.id)}
          buttonClass={this.state.buttonClass}
          mini={true}
          icon={<ModeEdit />} />
        <Button
          onClick={() => this.props.handleToggleDispatch(this.props.children.props.todo, !this.props.children.props.todo.completed)}
          buttonClass={this.state.buttonClass}
          mini={true}
          icon={<ModeEdit />} />
      </div>
    )
  }
}



const mapDispatch = (dispatch, ownProps) => {
  return {
    handleDelete(e, todoId) {
      dispatch(deleteToDo(todoId))
    },
    handleToggleDispatch(todo, status) {
      todo.completed = status
      dispatch(toggleTodoThunk(todo))
    }
  }
}


export default connect(null, mapDispatch)(PaperDiv)