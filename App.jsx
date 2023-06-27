/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {couroselData} from './components/molecule/data';
import Swiper from 'react-native-swiper';
const rightArrow = require('./assets/images/rightArrow.png');
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function App() {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <Swiper
        horizontal={true}
        paginationStyle={{bottom: 20}}
        activeDotColor="#03435F"
        autoplay={true}
        dotColor = '#EEF3F5'
        dot={
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              
            }}
          />
        }>
        {couroselData.map(item => {
          return (
            <View key={item.id} style={styles.wrapper}>
              <Image source={item.image} style={styles.imageStyle} />
              <Text style={styles.titleStyle}> {item.title} </Text>
              <Text style={styles.bodyStyle}> {item.body} </Text>
            </View>
          );
        })}
      </Swiper>
      <TouchableOpacity style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Get Started</Text>
        <Image source={rightArrow}  style={styles.iconImage}/>
      </TouchableOpacity>
    </View>
  );
}

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
    backgroundSize: 'cover',
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
    paddingVertical:8,
    width: 358,
    marginBottom: 60,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical:8,
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

export default App;
