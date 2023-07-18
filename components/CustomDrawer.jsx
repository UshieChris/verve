import React from 'react';
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
          paddingLeft: 20,
          paddingRight: 70,
          paddingBottom: 30,
          paddingTop: 100,
        }}>
        <VerveDrwSvg />
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 20,
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
              olaniyiakinwunmi@gmail...
            </Text>
          </View>
          <View>
            <PictureSvg />
          </View>
        </View>
      </View>
      <View style={{backgroundColor: '#3077BD',paddingBottom:20, paddingTop: 20, paddingLeft: 20}}>
        <Text style={{fontSize: 12, lineHeight:16, color: '#FFFFFF', fontFamily: 'AvertaStd-Light', fontWeight: 400}}>eCash Balance</Text>
        <Text style={{fontSize: 20, lineHeight:16, paddingTop:20, color: '#FFFFFF85', fontFamily: 'AvertaStd-Bold', fontWeight: 700}}>N4, 657.04</Text>
      </View>

      <View>
        <DrawerItemList
          {...props}
          style={{backgroundColor: '#000000'}}
          labelStyle={{color: '#ffffff'}}
          drawerItemStyle={{color: '#00425F'}}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
