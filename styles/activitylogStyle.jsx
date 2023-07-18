import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  title: {
    marginBottom: 10,
    color: '#7F8A99',
    fontFamily: 'AvertaStd-Bold',
    letterSpacing: 0.4,
    lineHeight: 15,
    fontSize: 12,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderRadius: 6,
    backgroundColor: '#3077BD',
  },
  flexStep: {
    color: '#FFFFFF',
    fontFamily: 'AvertaStd-Regular',
    fontSize: 10,
    lineHeight: 12,
    paddingTop: 5,
  },

  flexTextOne: {
    color: '#FFFFFF',
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'center',
    fontFamily: 'AvertaStd-Regular',
  },
  flexMenu: {
    alignItems: 'center',
    paddingBottom:20,
    paddingVertical:10,
    gap:15,
  },
  flexMenuFirst:{ alignItems: 'center',
  paddingBottom:20,
  paddingVertical:10,
  gap:15, paddingLeft: 25},
  flexIcon: {alignItems: 'center', gap: 5},
  flexStepCount: {
    paddingTop: 10,
    fontSize: 18,
    lineHeight: 22,
    color: '#FFFFFF',
    fontFamily: 'AvertaStd-ExtaBold',
  },
  flexMenuFive: {
    backgroundColor: '#2D71B3',
    justifyContent:'center',
    borderTopRightRadius: 10,
    padding:5,
    borderBottomRightRadius: 10,
  },
});

export default styles;
