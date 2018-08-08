import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './App.styles'
import { Routes } from './src/Routes'
import { Provider } from 'react-redux'
import { configureStore, sagaMiddleware } from './src/store'

const store = configureStore()


export default class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Routes />
        </Provider>
      )
    }
}
