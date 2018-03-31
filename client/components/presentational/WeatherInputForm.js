import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const WeatherInputForm = props => (
  <div className='weather-Form-Conatiner'>
    <TextField
      id='weather-Input-TextField'
      onChange={props.onChange}
      value={props.value}
    >
      <RaisedButton
        id='weather-Submit-Button'
        label='Submit'
        onClick={(e) => props.onSubmit(e, props.value)}
      />
    </TextField>
  </div>
)


export default WeatherInputForm