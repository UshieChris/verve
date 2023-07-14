import {StyleSheet, Dimensions} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  login: {
    fontFamily: 'Rubik-Bold',
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#00425F',
    marginTop: 40,
  },

  request: {
    fontFamily: 'Rubik-Light',
    lineHeight: 21,
    color: '#4F4F4F',
    letterSpacing: 0.5,
    fontSize: 16,
  },
  mailbox: {
    marginTop: 10,
  },

  boxContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent:'space-between', 
    gap: 15
  },
  box: {backgroundColor: '#E8E8E8', flex: 1, padding: 10},
  box1:{ flex: 1,},
  comfirmtext: {color : '#4F4F4F', marginTop: 20, marginBottom: 10, fontFamily: 'Rubik-Light', lineHeight: 21, fontSize: 16},
  changeno: {color: '#828282',  textDecorationLine: 'underline', fontFamily: 'Rubik-Light', lineHeight: 21, fontSize: 16},
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default styles;
