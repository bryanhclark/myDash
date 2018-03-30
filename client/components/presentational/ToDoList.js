import React from 'react'
import { PaperDiv, ToDoListItem } from '../index'



const ToDoList = props => {
  const myTodos = props.todos ? props.todos.map(todo => (
    <PaperDiv key={todo.id}>
      <ToDoListItem todo={todo} />
    </PaperDiv>)) : <h2>'Loading'</h2>

  return (
    <div className='todo-List-Functional-Container'>
      {myTodos}
    </div>
  )
}

export default ToDoList



