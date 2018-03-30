import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import { Button } from '../index'
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit'



class PaperDiv extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverIndex: 1
    }
    this.onMouseOut = this.onMouseOut.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
  }

  onMouseOver = () => this.setState({ hoverIndex: 3 })
  onMouseOut = () => this.setState({ hoverIndex: 1 })


  render() {
    return (
      <div className='todo-List-Item-Container'>
        <Paper
          className='paper-Container'
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          zDepth={this.state.hoverIndex}
        >
          {this.props.children}
        </Paper>
        <Button
          class='edit-Button'
          mini='true'
          icon={<ModeEdit />} />
      </div>
    )
  }
}


export default PaperDiv