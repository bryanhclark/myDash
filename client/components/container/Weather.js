import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WeatherInputForm } from '../index'




class Weather extends Component {
  constructor(props) {
    super(props)

  }


  render() {
    return (
      <div className='weather-Main-Container'>
        <p>Weather Input</p>
        <WeatherInputForm />
      </div>
    )
  }
}