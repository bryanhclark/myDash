import React from 'react'


const ToDoListItem = props => {
  let myClassName = props.todo.completed ? 'todo-Item-Completed' : 'todo-Item-Active'
  return (
    <div className='todo-List-Item'>
      <p className={myClassName}> {props.todo.data}</p>
    </div>
  )
}



export default ToDoListItem