import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const toggleButton = (props) => (
  <FloatingActionButton
    onClick={props.handleToggle}
  >
    <ContentAdd />
  </FloatingActionButton>
)


module.exports = toggleButton