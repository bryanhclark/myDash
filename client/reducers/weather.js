import axios from 'axios'


//ACTION TYPES
const GET_WEATHER = 'GET_WEATHER'

//ACTION CREATORS
const getWeather = weather => {
  return { type: GET_WEATHER, weather }
}

//THUNKS
export const fetchWeather = location => {
  return dispatch => {
    axios.get('/api/weather')
  }
}