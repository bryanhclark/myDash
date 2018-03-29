import React from 'react'
import TextField from 'material-ui/TextField';


const ToDoInpurForm = props => (
    <TextField
        onChange={props.onChange}
        value={props.value}
    />
)



export default ToDoInpurForm