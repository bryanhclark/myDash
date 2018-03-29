import React from 'react'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'



const IconMenuDropDown = props => (
  <div className='Icon-Menu-Button-Container'>
    <IconMenu
      iconButtonElement={<IconButton>{props.icon}</IconButton>}
      clickCloseDelay={50}
    >
      {
        props.items.map(item => item.data)
      }
    </IconMenu>
  </div>
)


export default IconMenuDropDown