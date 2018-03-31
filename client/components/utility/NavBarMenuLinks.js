import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem';


const NavBarMenuLinks = [
  {
    data: (
      <MenuItem
        key={1}
        containerElement={<NavLink to={'/'} />}
        value="1"
        primaryText="Home"
      />
    )
  },
  {
    data: (
      <MenuItem
        key={2}
        containerElement={<NavLink to={'/todo'} />}
        value="2"
        primaryText="Todo List"
      />
    )
  },
  {
    data: (
      <MenuItem
        key={3}
        containerElement={<NavLink to={'/weather'} />}
        value="3"
        primaryText="Weather"
      />
    ),
  }
]


export default NavBarMenuLinks