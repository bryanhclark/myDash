import axios from 'axios'

//action types
const GET_TODOS = 'GET_TODOS'
const ADD_TODOS = 'ADD_TODOS'
const TOGGLE_TODO = 'TOGGLE_TODO'
const DELETE_TODO = 'DELETE_TODO'

//ACTION CREATORS
const getTodos = todos => {
  return { type: GET_TODOS, todos }
}

const addTodos = newTodo => {
  return { type: ADD_TODOS, newTodo }
}

const toggleTodo = todo => {
  return { type: TOGGLE_TODO, todo }
}

const deleteTodo = todoId => {
  return { type: DELETE_TODO, todoId }
}


//THUNKS
//look at scrappr comment api for using query params
export const fetchAllTodos = () => {
  return dispatch => {
    axios.get('/api/todos')
      .then(res => dispatch(getTodos(res.data)))
      .catch(console.error)
  }
}

export const addNewTodo = todo => {
  return dispatch => {
    axios.post('/api/todos', { todo })
      .then(res => dispatch(addTodos(res.data)))
      .catch(console.error)
  }
}

export const toggleTodoThunk = todo => {
  console.log('in thunk,', todo)
  return dispatch => {
    axios.put('/api/todos', { data: { todo } })
      .then(res => dispatch(toggleTodo(todo)))
      .catch(console.error)
  }
}

export const deleteToDo = todoId => {
  return dispatch => {
    axios.delete('/api/todos', { params: { todoId: todoId } })
      .then(() => dispatch(deleteTodo(todoId)))
      .catch(console.error)
  }
}


export default (state = [], action) => {
  switch (action.type) {
    case GET_TODOS:
      return action.todos
    case ADD_TODOS:
      return [...state, action.newTodo]
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.todo.id) return action.todo
        else return todo
      })
    case DELETE_TODO:
      return state.filter(todo => {
        return todo.id !== action.todoId
      })
    default:
      return state
  }
}