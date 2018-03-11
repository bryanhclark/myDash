import React, { Component } from 'react'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';


export default class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Toolbar className='navbarMain' style={style}>
        <ToolbarTitle text='myDash' />
      </Toolbar>
    )
  }
}



const style = {
  backgroundColor: "#00E676"
}