/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { couroselData } from '../molecule/data';
import Swiper from 'react-native-swiper';
import {RightArrowSvg} from './svgs';
import styles from '../styles/couroselstyle';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from 'react-native';


export default function Carousel({navigation}) {
  useEffect(() => {
    setTimeout(()=> {
      if (Platform.OS === 'android') SplashScreen.hide();
    }, 2000)
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
              <StatusBar backgroundColor={'#00000033'} hidden={false} />
              <Image source={item.image} style={styles.imageStyle} />
              <Text style={styles.titleStyle}> {item.title} </Text>
              <Text style={styles.bodyStyle}> {item.body} </Text>
            </View>
          );
        })}
      </Swiper>
      <TouchableOpacity style={styles.appButtonContainer} onPress={()=>navigation.navigate("Signin")} >
        <Text style={styles.appButtonText}>Get Started</Text>
        <RightArrowSvg />
      </TouchableOpacity>
    </View>
  );
}
