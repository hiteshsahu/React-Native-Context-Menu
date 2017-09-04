/**
 * Style.js
 *
 * Created by kylewbanks on 2016-08-07.
 */
'use strict';

import { StyleSheet ,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
const gutter = 3; // You can add gutter if you want

var Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292f36',
  },
// Background image
imageBackground: {
 flex: 1,
 width:width,
 height:height,                      // Take up all screen space
 padding: 20                         // Add padding for content inside
},
//Divider
divider: {
  width: width ,
  height:2,
  backgroundColor: '#E1DFD7',
},
text_menu:
{  backgroundColor: "white",
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
},
btn_login:
{   backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderWidth: 1,
    padding:5,
    borderColor: 'blue'
              }


});

export default Style;
