import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import { Home, Todo, NavBar } from './index'


class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className='app-Main-Container'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/todo' component={Todo} />
        </Switch>
      </div>
    )
  }
}


module.exports = App