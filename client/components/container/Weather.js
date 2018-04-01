import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WeatherDisplay, InputForm } from '../index'
import { fetchWeather } from '../../reducers/weather'



class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherInput: ''
    }
    this.handleWeatherInputChange = this.handleWeatherInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleWeatherInputChange(e) {
    this.setState({ weatherInput: e.target.value })
  }

  handleSubmit(e, weather) {
    let myWeather = weather.replace(/[^a-zA-Z\d\w\s]/g, '').split(' ').join('+')
    this.props.handleSubmitDispatch(myWeather)
    this.setState({ weatherInput: '' })
  }


  render() {
    console.log(this.props.weather)
    const weatherDisplay = this.props.weather.length > 0 ? <WeatherDisplay weather={this.props.weather} /> : <p>Loading</p>
    return (
      <div className='weather-Main-Container'>
        <p>Weather Input</p>
        <InputForm
          divClass='weather-Input-Div'
          textfieldId='weather-Textfield'
          value={this.state.weatherInput}
          onChange={this.handleWeatherInputChange}
          onSubmit={this.handleSubmit}
        />
        {weatherDisplay}
      </div>
    )
  }
}

const mapState = state => {
  return {
    weather: state.weather
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmitDispatch(weather) {
      dispatch(fetchWeather(weather))
    }
  }
}

export default connect(mapState, mapDispatch)(Weather)