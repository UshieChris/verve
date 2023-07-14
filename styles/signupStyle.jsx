import {StyleSheet, Dimensions} from 'react-native';

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
  nameBox: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 20,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  firstName: {
    backgroundColor: '#E8E8E8',
    flex: 1,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  lastName: {
    backgroundColor: '#E8E8E8',
    flex: 1,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },

  contact: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 20,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  contactNo: {
    backgroundColor: '#E8E8E8',
    flex: 4,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  contactCd: {
    backgroundColor: '#E8E8E8',
    flex: 1,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  autContainer: {
    alignItems: 'center',
  },
  mb: {
    marginTop: 15,
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moduleLight: {
    fontFamily: 'Rebik-Light',
    fontSize: 16,
    lineHeight: 24.71,
    letterSpacing: -0.49,
    color: '#4F4F4F',
  },
  moduleBold: {
    fontFamily: 'Rubik-Bold',
    lineHeight: 24.71,
  },
  passwordContainer: {
    backgroundColor: '#E8E8E8',
    paddingLeft: 15,
    textAlign: 'center',
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    lineHeight: 100,
    position: 'relative',
    marginBottom: 20,
  },
  password: {
    lineHeight: 100,
  },
  eyeCheck: {
    marginRight: 18,
    marginTop: 18,
    backgroundColor: 'red',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  mailContainer: {
    backgroundColor: '#E8E8E8',
    fontSize: 16,
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'left',
    paddingLeft: 15,
    marginTop: 10,
  },
});

export default styles;
