import App from './src/app'
import React, { Component } from 'react'
import {
   AppRegistry,
   View
} from 'react-native'


class MenuButton extends Component {
   render() {
      return (
         <App />
      )
   }
}

AppRegistry.registerComponent('MenuButton', () => MenuButton);
