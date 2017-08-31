/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,TouchableOpacity,Image,
  Text,
  View,Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');
import Menu, {
  MenuContext,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-popup-menu';

export default class FAB extends Component {

  constructor(props, ctx) {
  super(props, ctx);
  this.state = { opened: true };
}



onOptionSelect(value) {
  alert(`Selected number: ${value}`);
  this.setState({ opened: false });
}

onTriggerPress() {
  this.setState({ opened: true });
}

onBackdropPress() {
  this.setState({ opened: false });
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

        <MenuContext
      style={{flexDirection: 'column', padding: 30}}>
      <Text>Hello world!</Text>
      <Menu
        opened={this.state.opened}
        onBackdropPress={() => this.onBackdropPress()}
        onSelect={value => this.onOptionSelect(value)}>
        <MenuTrigger
          onPress={() => this.onTriggerPress()}
          text='Select option'/>
        <MenuOptions>
          <MenuOption value={1} text='One' />
          <MenuOption value={2}>
            <Text style={{color: 'red'}}>Two</Text>
          </MenuOption>
          <MenuOption value={3} disabled={true} text='Three' />
        </MenuOptions>
      </Menu>
    </MenuContext>


      <TouchableOpacity

             style={{ backgroundColor: '#673ab7',
                      borderWidth:1,
                      borderColor:'rgba(0,0,0,0.2)',
                      alignItems:'center',
                      justifyContent:'center',
                      width:50,
                      height:50,
                      position: 'absolute',
                      left: Dimensions.get('window').width-55,
                      bottom:50,
                      zIndex: 1000,
                      borderRadius:100,
                   }}>

                   <Image
                   source={require('./src/assets/menu.png')}
                   style={{width: 30,
                      height: 30}}>
                   </Image>
    </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width:Dimensions.get('window').width
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FAB', () => FAB);
