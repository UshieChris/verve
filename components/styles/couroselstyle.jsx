import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {width: screenWidth, height: screenHeight},
    wrapper: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Rubik-Light',
    },
  
    imageStyle: {
      justifyContent: 'center',
      maxWidth: screenWidth,
      width: '100%',
      height: screenHeight * 0.6,
      resizeMode: 'cover',
      objectFit: 'cover',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    titleStyle: {
      width: 248,
      color: '#233539',
      fontSize: 24,
      lineHeight: 28,
      textTransform: 'capitalize',
      letterSpacing: -0.48,
      textAlign: 'center',
      paddingTop: 20,
    },
    bodyStyle: {
      width: 308,
      color: '#75888C',
      fontSize: 17,
      lineHeight: 20,
      textTransform: 'capitalize',
      textAlign: 'center',
      fontFamily: 'Roboto-Light',
      paddingTop: 10,
    },
  
    appButtonContainer: {
      backgroundColor: '#1A73E8',
      borderRadius: 5,
      width: 308,
      marginBottom: 50,
      justifyContent: 'flex-start',
      alignSelf: 'center',
      paddingHorizontal: 30,
      paddingVertical:4,
      display: 'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    appButtonText: {
      fontSize: 23,
      alignSelf: 'center',
      color: '#fff',
      alignSelf: 'flex-start',
      lineHeight: 48,
      justifyContent: 'flex-start',
      textTransform: 'capitalize',
      fontFamily:'Rubik-Light',
      letterSpacing: -1
    },
  
    iconImage: {
      justifySelf: 'flex-end',
    }
  });

  export default styles