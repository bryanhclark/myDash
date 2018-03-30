import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';



const Button = props => (
  <FloatingActionButton
    onClick={props.onClick}
    className={props.class}
    mini={props.mini}
    zDepth={0}
  >
    {props.icon}
  </FloatingActionButton>
)


export default Button