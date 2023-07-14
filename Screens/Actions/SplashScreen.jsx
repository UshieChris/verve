import React, {useEffect} from 'react';
import {ImageBackground, Image, StatusBar} from 'react-native';
import styles from '../../styles/splashscreenStyle';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Carousel');
    }, 4000);
  });

  return (
    <ImageBackground
      source={require('../../assets/images/splashBackground.png')}
      style={[styles.container]}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        hidden={false}
      />
      <Image source={require('../../assets/images/splashLogo.png')} />
    </ImageBackground>
  );
};

export default SplashScreen;