import React, { Component } from 'react';
import Style from './Style';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

export default class App extends Component {
  render() {
    return (
      <MenuContext  style={styles.container}>



<Image source={{uri: 'https://images.pexels.com/photos/326585/pexels-photo-326585.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}}
style={Style.imageBackground}>


        <Text style={styles.welcome}>
          React Native Context Menu!
        </Text>


    <Menu  style={{ backgroundColor: '#673ab7',
              borderWidth:1,
              borderColor:'rgba(0,0,0,0.2)',
              alignItems:'center',
              justifyContent:'center',
              width:50,
              height:50,
              position: 'absolute',
              right: 50,
              bottom:50,
              borderRadius:100,
           }} onSelect={(value) => alert(`User selected the number ${value}`)}>

     <MenuTrigger>
       <Text style={{ fontSize: 20,color:'white' }}>&#8942;&#8942;&#8942;&#8942;</Text>
     </MenuTrigger>

     <MenuOptions
      optionsContainerStyle={{ position: 'absolute',
         left: 150,
         right:200,
         top:150,
         bottom:50,
         borderRadius: 10,
          elevation: 20 }}
       >
       <MenuOption value={1}>
         <Text>Terms of Use</Text>
         <View style={Style.divider}/>
       </MenuOption>

       <MenuOption value={2}>
         <Text style={Style.text_menu}>Accessibility</Text>
          <View style={Style.divider}/>
       </MenuOption>
       <MenuOption value={3}>
         <Text style={Style.text_menu}>NonDiscrimination</Text>
           <View style={Style.divider}/>
       </MenuOption>
       <MenuOption value={4}>
         <Text style={Style.text_menu}>Privacy Policy</Text>
        <View style={Style.divider}/>
       </MenuOption>
       <MenuOption value={5}>
         <Text style={Style.text_menu}>Find Care</Text>
         <View style={Style.divider}/>
       </MenuOption>
       <MenuOption value={6}>
         <Text style={Style.text_menu}>Support</Text>
         <View style={Style.divider}/>
       </MenuOption>
       <MenuOption value={7}>
         <Text style={Style.text_menu}>hiteshsahu.com</Text>
         <View style={Style.divider}/>
       </MenuOption>
       <MenuOption value={8}>
         <Text style={Style.text_menu}>Speak Another language?</Text>
         <View style={Style.divider}/>
       </MenuOption>
       <MenuOption value={9}>
         <Text  style={Style.btn_login}>Login</Text>
       </MenuOption>

     </MenuOptions>
   </Menu>

     </Image>

      </MenuContext>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 35,
    color: '#FFF',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('App', () => App);
