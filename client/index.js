import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './reducers/store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { App } from './components'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
  , document.getElementById('app')

)