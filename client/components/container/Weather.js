import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WeatherInputForm } from '../index'
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
    this.props.handleSubmitDispatch(weather)
    this.setState({ weatherInput: '' })
  }


  render() {
    return (
      <div className='weather-Main-Container'>
        <p>Weather Input</p>
        <WeatherInputForm
          value={this.state.weatherInput}
          onChange={this.handleWeatherInputChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {
    handleSubmitDispatch(weather) {
      dispatch(fetchWeather(weather))
    }
  }
}

export default connect(mapState, mapDispatch)(Weather)