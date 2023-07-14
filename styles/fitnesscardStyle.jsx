import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    columnGap:10,
    padding: 10,
    alignItems: 'center',
  },
  flexMenu: {flex:1.2},
  flexTitle: {
    color: '#00425F',
    fontSize: 22,
    marginBottom: 10,
    lineHeight: 20,
    letterSpacing: -0.49,
    fontFamily: 'AvertaStd-Bold'
  },
  flexText: {
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 10,
    fontFamily: 'AvertaStd-Regular',
    color:'#00425F'
  },
  flexButton: {color: '#EE312A', fontSize: 12, lineHeight: 15, textTransform: 'uppercase'},
  flexImage: {flex: 1.5},
  flexImageRight: {alignSelf: 'flex-end'}
});

export default styles;
