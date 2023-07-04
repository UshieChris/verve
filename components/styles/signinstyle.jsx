import {StyleSheet, Dimensions} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  login: {
    fontFamily: 'Rubik-Bold',
    fontSize: 24,
    paddingTop: 20,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#00425F',
  },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width:"100%"
//   },

//   input: {
//     height: 40,
//     width: '80%',
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
});

export default styles;
