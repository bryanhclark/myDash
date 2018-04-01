import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


const InputForm = props => (
  <div className={props.divClass}>
    <TextField
      id={props.textfieldId}
      value={props.value}
      onChange={props.onChange}
    />
    <RaisedButton
      id={props.buttonId}
      label='Submit'
      onClick={(e) => props.onSubmit(e, props.value)}
    />
  </div>
)


export default InputForm


