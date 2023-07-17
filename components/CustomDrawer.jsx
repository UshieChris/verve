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
      {/* <ImageBackground source={IMGS.bgPattern} style={{height: 140}}>
        <Image source={IMGS.user} style={styles.userImg} />
      </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View> */}
      <View
        style={{
          backgroundColor: '#00425F',
          margin: 0,
          paddingLeft: 20,
          paddingRight: 70,
          paddingBottom: 100,
          paddingTop: 100,
        }}>
        <VerveDrwSvg />
        <View style = {{display: 'flex', justifyContent: 'space-between', flexDirection:'row', marginTop: 20, columnGap: 10}}>
          <View >
            <Text style = {{fontFamily:'AvertaStd-Light', lineHeight:18, fontSize:18, color:'#FFFFFF', marginBottom: 10}}>Hi, Olaniyi</Text>
            <Text style = {{fontFamily:'AvertaStd-Light', lineHeight:12, fontSize:16, color:'#FFFFFF85'}}>olaniyiakinwunmi@gmail...</Text>
          </View>
          <View>
            <PictureSvg />
          </View>
        </View>
      </View>

      <View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
