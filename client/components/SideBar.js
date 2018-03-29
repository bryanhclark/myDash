import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'


const SideBar = (props) => (
  <Drawer open={props.open}>
    <h3> drawer open</h3>
  </Drawer>
)

module.exports = SideBar