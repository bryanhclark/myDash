import React, { Component } from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { NavBar, Home, ToDo } from './index'


export default class Main extends Component {
  render() {
    return (
      <div className='maincontainer'>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/todo' component={ToDo} />
          </Switch>
        </div>
      </div>
    )
  }
}


