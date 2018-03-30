import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { NavLink } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { IconMenuDropDown, NavBarMenuLinks } from '../index'

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
        iconElementRight={<IconMenuDropDown items={NavBarMenuLinks} icon={<MoreVertIcon />} />}
      >
      </AppBar>
    )
  }
}








module.exports = NavBar