import React from 'react'


const ToDoListItem = props => {
  return (
    <div className='todo-List-Item-Container'>
      <p>{props.todo.data}</p>
    </div>
  )
}



export default ToDoListItem