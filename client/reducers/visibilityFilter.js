//ACTION TYPES
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

//filterTypes
export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

//VISIBILITYFilterMethod
export const filterTodos = (todos, status) => {
  if (status === 'SHOW_COMPLETED') return todos.filter(todo => todo.completed)
  else if (status === 'SHOW_ACTIVE') return todos.filter(todo => !todo.completed)
  else return todos
}


//ACTION CREATORS

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const setVisibilityFilterDispatch = filter => {
  return dispatch => {
    dispatch(setVisibilityFilter(filter))
  }
}

//subReducer
export default (state = visibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}