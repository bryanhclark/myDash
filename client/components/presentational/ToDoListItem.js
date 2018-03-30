import React from 'react'


const ToDoListItem = props => {
  return (
    <div className='todo-List-Item'>
      <p>{props.todo.data}</p>
    </div>
  )
}



export default ToDoListItem