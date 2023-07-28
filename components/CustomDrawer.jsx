import React from 'react';
import DrawerItem from '@react-navigation/drawer';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {COLORS, IMGS} from '../constants';

const {width} = Dimensions.get('screen');
import {PictureSvg, VerveLogoSvg, VerveDrwSvg} from '../helpers/svgs';


const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          backgroundColor: '#00425F',
          margin: 0,
          paddingLeft: 15,
          paddingRight: 25,
          paddingBottom: 40,
          paddingTop: 100,
        }}>
        <VerveDrwSvg />
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 20,
            paddingLeft: 10,
            columnGap: 10,
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'AvertaStd-Light',
                lineHeight: 18,
                fontSize: 18,
                color: '#FFFFFF',
                marginBottom: 10,
              }}>
              Hi, Olaniyi
            </Text>
            <Text
              style={{
                fontFamily: 'AvertaStd-Light',
                lineHeight: 12,
                fontSize: 16,
                color: '#FFFFFF85',
              }}>
              olaniyiakinwunmi@gmail..
            </Text>
          </View>
          <View>
            <PictureSvg />
          </View>
        </View>
      </View>
      <View>
        <DrawerItemList
        style={{backgroundColor: '#000000', marginBottom: 0}}
        labelStyle={{color: '#ffffff', marginBottom: 0}}
        drawerItemStyle={{color: '#00425F', marginBottom: 0}}
        androidPressColor="rgba(255, 255, 255, 0.5)" 
          {...props}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
