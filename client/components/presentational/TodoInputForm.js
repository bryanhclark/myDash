import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'


const ToDoInputForm = props => (
    <div className='todo-Form-Container'>
        <TextField
            onChange={props.onChange}
            value={props.value}
        />
        <RaisedButton
            label='Submit'
            onClick={(e) => props.onSubmit(e, props.value)}
        />
    </div>
)



export default ToDoInputForm