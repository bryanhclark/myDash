import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem';


const NavBarMenuLinks = [
  {
    key: 1,
    data: (
      <MenuItem
        containerElement={<NavLink to={'/'} />}
        value="1"
        primaryText="Home"
      />
    ),
  },
  {
    key: 2,
    data: (
      <MenuItem
        containerElement={<NavLink to={'/todo'} />}
        value="1"
        primaryText="Todo List"
      />
    ),
  }
]


export default NavBarMenuLinks