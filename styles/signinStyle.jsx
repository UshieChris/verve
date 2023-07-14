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
    marginTop: 40
  },
  autcontainer: {
  alignItems: 'center'
  },
  mb: {
    marginTop:15
  },
  ortext: {
    fontSize: 16,
    lineHeight: 19.97,
    letterSpacing: -0.49,
    color: '#828282',
    fontFamily: 'Rubik-Medium'
  },
  container: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modulelighttext: {
    fontFamily: 'Rebik-Light',
    fontSize: 16,
    lineHeight:24.71,
    letterSpacing: -0.49,
    color:'#4F4F4F',
  },
  moduleboldtext: {
    fontFamily: 'Rubik-Bold',
    lineHeight:24.71,
  },
  passwordContainer : {
    backgroundColor: '#E8E8E8',
    marginTop: 10,
    textAlign:'center',
    paddingRight:15,
    paddingTop: 5,
    paddingBottom: 5,
    lineHeight:100,
    position:'relative'
  },
  password: {
    lineHeight:100,
  },
  eyecheck: {
    marginRight:18,
    marginTop:18,
    position:'absolute',
    right:0,
    top:0,
  },
  mailcontainer: {
    borderBottomColor: '#1A73E8',
    borderBottomWidth: 3,
    fontSize: 16,
    paddingLeft: 15,
    marginBottom:20,
    marginTop: 20
  }

});

export default styles;
