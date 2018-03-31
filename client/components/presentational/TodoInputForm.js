import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'


const ToDoInputForm = props => (
    <div className='todo-Form-Container'>
        <TextField
            id='todo-Input-TextField'
            onChange={props.onChange}
            value={props.value}
        />
        <RaisedButton
            id='todo-Submit-Button'
            label='Submit'
            onClick={(e) => props.onSubmit(e, props.value)}
        />
    </div>
)



export default ToDoInputForm