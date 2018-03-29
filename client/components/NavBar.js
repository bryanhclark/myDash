import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

import { SideBar, ToggleButton } from './index'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSidebarOpen: false
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
  }

  render() {
    return (
      <AppBar
        title='myDash'
        showMenuIconButton={false}
        iconElementRight={<ToggleButton handleToggle={this.handleToggle} className='sideBar-Toggle-Button' />}
      >
        <SideBar open={this.state.isSidebarOpen} />
      </AppBar>
    )
  }
}








module.exports = NavBar