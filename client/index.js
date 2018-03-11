import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Main from './components/Main'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'



ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Main />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)