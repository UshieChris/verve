import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/NavigationScreen/HomeScreen';
import Wallet from '../Screens/NavigationScreen/WalletScreen';
import Settings from '../Screens/NavigationScreen/SettingsScreen';
import LaunchActivity from '../Screens/NavigationScreen/LaunchActivityScreen';
import VerveDeals from '../Screens/NavigationScreen/VerveDealsScreen';
import Dashboard from '../Screens/ProfileScreen/DashboardScreen';
import {
  HomeSvg,
  WalletSvg,
  VerveDealsSvg,
  SettingsSvg,
  LaunchActivitySvg,
} from '../helpers/svgs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#4CA7BD',
        tabBarStyle: [
          {
            height: 60,
            paddingBottom: 5,
            alignContent: 'space-between',
            justifyContent: 'space-between',
            backgroundColor: '#F9F9F9',
          },
        ],
      }}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: () => <HomeSvg />,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: false,
          tabBarIcon: () => <WalletSvg />,
        }}
      />
      <Tab.Screen
        name="Launch Activity"
        component={LaunchActivity}
        options={{
          headerShown: false,
          tabBarIcon: () => <LaunchActivitySvg />,
        }}
      />
      <Tab.Screen
        name="Verve Deals"
        component={VerveDeals}
        options={{
          headerShown: false,
          tabBarIcon: () => <VerveDealsSvg />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: () => <SettingsSvg />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
