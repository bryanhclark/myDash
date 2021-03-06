import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'


//sub-reducers:
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import weather from './weather'


const reducer = combineReducers({
  todos,
  visibilityFilter,
  weather
})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))

const store = createStore(reducer, middleware)



export default store