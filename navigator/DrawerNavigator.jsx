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
        drawerActiveBackgroundColor: '#fff',
        itemStyle: { padding: 0, color: '#00425F' },
        drawerItemStyle:{color: '#00425F'},
        drawerInactiveTintColor:'#00425F',
        drawerActiveTintColor: '#00425F',
        drawerLabelStyle:{fontSize:18, lineHeight:18, fontFamily:'AvertaStd-Regular', fontWeight:400},
      
        drawerStyle: {
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
