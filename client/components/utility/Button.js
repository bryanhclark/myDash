import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';



const Button = props => (
  <div className={props.buttonClass}>
    <FloatingActionButton
      onClick={props.onClick}
      mini={props.mini}
      zDepth={2}
    >
      {props.icon}
    </FloatingActionButton>
  </div>
)


export default Button