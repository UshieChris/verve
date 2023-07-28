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
          width: screenWidth,
          marginLeft: 0,
          paddingLeft:20,
          marginTop:0,
          borderWidth:0,
          marginBottom:0
        },
        drawerStyle: {
          marginTop: -100,
        },
      }}>
      <Drawer.Screen
        name={'Wallet'}
        component={Wallet}
        options={{
          title: () => (
            <View
              style={{
                backgroundColor: '#3077BD',
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
                  paddingTop:20
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
          ),
        }}
      />
      <Drawer.Screen
        name={'HomePage'}
        component={TabNavigator}
        options={{
          title: 'Home Page',
        }}
      />

      <Drawer.Screen
        name="Friends"
        component={Friends}
        options={{
          title: 'Friends',
        }}
      />

      <Drawer.Screen
        name="Events"
        component={Events}
        options={{
          title: 'Events',
        }}
      />

      <Drawer.Screen
        name="Groups"
        component={Groups}
        options={{
          title: 'Groups',
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          title: 'Log out',
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
