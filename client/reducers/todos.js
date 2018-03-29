import axios from 'axios'

//action types
const GET_TODOS = 'GET_TODOS'
const ADD_TODOS = 'ADD_TODOS'

//ACTION CREATORS
const getTodos = todos => { type: GET_TODOS, todos }

const addTodos = newTodo => { type: ADD_TODOS, newTodo }


//THUNKS
//look at scrappr comment api for using query params
export const fetchAllTodos = () => {
  return dispatch => {
    axios.get('/api/todos')
      .then(res => dispatch(getTodos(res.data)))
      .catch(console.error)
  }
}


export default (state = [], action) => {
  switch (action.type) {
    case GET_TODOS:
      return action.todos
    default:
      return state
  }
}