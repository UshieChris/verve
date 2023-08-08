import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import CustomDrawer from '../components/CustomDrawer';
import Logout from '../Screens/NavigationScreen/DrawerNavigation/LogOutScreen';
import Events from '../Screens/NavigationScreen/DrawerNavigation/EventsScreen';
import Friends from '../Screens/NavigationScreen/DrawerNavigation/FriendsScreen';
// import TabNavigator from './TabNavigator';
import Groups from '../Screens/NavigationScreen/DrawerNavigation/GroupsScreen';

import Settings from '../Screens/NavigationScreen/TabNavigation/SettingsScreen';
import Wallet from '../Screens/NavigationScreen/TabNavigation/WalletScreen';
import {Text, View, Dimensions,} from 'react-native';
const screenWidth = Dimensions.get('window').width;
import { StackNavigators } from './StackNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
    initialRouteName="HomePage"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#fff',
        itemStyle: {padding: 0, color: '#00425F'},
        drawerItemStyle: {color: '#00425F'},
        drawerInactiveTintColor: '#00425F',
        drawerActiveTintColor: '#00425F',
        
        drawerLabelStyle: {
          fontSize: 18,
          lineHeight: 18,
          fontFamily: 'AvertaStd-Regular',
          fontWeight: 400,
          
        },
        drawerItemStyle: {
          borderRadius: 0,
    
          marginLeft: 0,
          paddingLeft:20,
          marginTop:0,
          borderWidth:0,
          marginBottom:0
        },
        // drawerStyle: {
        //   marginTop: -100,
        // },
      }}>
      <Drawer.Screen
        name={'HomePage'}
        component={StackNavigators}
        options={{
          title: 'Home Page',
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
