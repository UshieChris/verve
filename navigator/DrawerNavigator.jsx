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

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        // drawerActiveBackgroundColor: '#7d5fff',
        itemStyle: { padding: 0 },
        // drawerActiveTintColor: 'fff',
        // drawerActiveBackgroundColor: COLORS.primary,
        // drawerActiveTintColor: COLORS.white,
        // drawerLabelStyle: {
        //   marginLeft: -20,
        //   backgroundColor:'red'
        // },
        drawerStyle: {
          // backgroundColor: '#c6cbef',
          // width: 240,
          marginTop: -100
          
        },
      }}>
      <Drawer.Screen
        name={'HomePage'}
        component={TabNavigator}
        options={{
          title: 'Home Page' 
        
        }}
      />

      <Drawer.Screen
        name='Friends'
        component={Friends}
        options={{
          title: 'Friends' 
        }}
      />

      <Drawer.Screen
        name='Events'
        component={Events}
        options={{
          title: 'Events' 
       
        }}
      />

      <Drawer.Screen
        name='Groups'
        component={Groups}
        options={{
          title: 'Groups' 
        
        }}
      />

         <Drawer.Screen
        name='Settings'
        component={Settings}
        options={{
          title: 'Settings',
        }}
      />
         <Drawer.Screen
        name='Logout'
        component={Logout}
        options={{
          title: 'Log out',
         
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
