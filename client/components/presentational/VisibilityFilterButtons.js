import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'


const VisibilityFilterButtons = props => {
  return (
    <div className='visibility-Buttons-Container'>
      <RaisedButton
        label='Show All'
        onClick={(e) => props.handleFilterChange('SHOW_ALL')}
      />
      <RaisedButton
        label='Show Active'
        onClick={(e) => props.handleFilterChange('SHOW_ACTIVE')}
      />
      <RaisedButton
        label='Show Completed'
        onClick={(e) => props.handleFilterChange('SHOW_COMPLETED')}
      />
    </div>
  )
}

export default VisibilityFilterButtons