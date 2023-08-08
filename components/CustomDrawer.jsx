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
  DrawerItem,
} from '@react-navigation/drawer';
import {COLORS, IMGS} from '../constants';

const {width} = Dimensions.get('screen');
import {PictureSvg, VerveLogoSvg, VerveDrwSvg} from '../helpers/svgs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomDrawer = props => {
  const insets = useSafeAreaInsets();
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        paddingTop: 0,
      }}
      {...props}>
      <View
        style={{
          backgroundColor: '#00425F',
          margin: 0,
          paddingLeft: 15,
          paddingRight: 25,
          paddingBottom: 40,
          paddingTop: 70,
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
        {/* <DrawerItemList
          style={{backgroundColor: '#000000', marginBottom: 0}}
          labelStyle={{color: '#ffffff', marginBottom: 0}}
          drawerItemStyle={{color: '#00425F', marginBottom: 0}}
          androidPressColor="rgba(255, 255, 255, 0.5)"
          {...props}
        /> */}
        <DrawerItem
          {...this.props}
          activeTintColor="#2196f3"
          activeBackgroundColor="rgba(0, 0, 0, .04)"
          inactiveTintColor="rgba(0, 0, 0, .87)"
          inactiveBackgroundColor="transparent"
          style={{ marginLeft: 0, marginTop:0, borderRadius:0, marginRight:0}}
          labelStyle={{color: '#ffffff', marginLeft: 0}}
          label={() => (
            <View
              style={{
                backgroundColor: '#3077BD',
                width: 10000,
                paddingBottom: 20,
                paddingTop: 20,
                paddingLeft: 30,
                marginLeft: -30,
                marginTop: -30,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 16,
                  color: '#FFFFFF',
                  fontFamily: 'AvertaStd-Light',
                  fontWeight: 400,
                  paddingTop: 20,
                }}>
                eCash Balance
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  lineHeight: 16,
                  paddingTop: 10,
                  color: '#FFFFFF85',
                  fontFamily: 'AvertaStd-Bold',
                  fontWeight: 700,
                }}>
                N4, 657.04
              </Text>
            </View>
          )}
          onPress={() => props.navigation.navigate('Wallet')}
        />
        <DrawerItem
          label="Home Page"
          onPress={() => props.navigation.navigate('HomePage')}
        />
        <DrawerItem
          label="Friends"
          onPress={() => props.navigation.navigate('Friends')}
        />
        <DrawerItem
          label="Groups"
          onPress={() => props.navigation.navigate('Groups')}
        />
        <DrawerItem
          label="Settings"
          onPress={() => props.navigation.navigate('Settings')}
        />
        <DrawerItem
          label="Log Out"
          onPress={() => props.navigation.navigate('Logout')}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
