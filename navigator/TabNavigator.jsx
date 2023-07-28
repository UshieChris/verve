import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/NavigationScreen/TabNavigation/HomeScreen';
import Wallet from '../Screens/NavigationScreen/TabNavigation/WalletScreen';
import Settings from '../Screens/NavigationScreen/TabNavigation/SettingsScreen';
import LaunchActivity from '../Screens/NavigationScreen/TabNavigation/LaunchActivityScreen';
import VerveDeals from '../Screens/NavigationScreen/TabNavigation/VerveDealsScreen';
import Dashboard from '../Screens/ProfileScreen/DashboardScreen';
import { TouchableOpacity } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {
  HomeSvg,
  WalletSvg,
  VerveDealsSvg,
  HamburgerSvg,
  SettingsSvg,
  LaunchActivitySvg,
} from '../helpers/svgs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import Header from '../helpers/Header';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();

  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const hideOnScreens = ['Settings']; // put here name of screen where you want to hide tabBar
    return hideOnScreens.indexOf(routeName) <= -1;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#4CA7BD',
        headerShown: false,
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
          headerShown: true,
          headerStyle: {
            backgroundColor: '#ffffff33',
          },
          headerTitle: ()=><Header />,
          headerLeft: () => {
            return (
              <TouchableOpacity style = {{padding:20}} onPress={() => navigation.openDrawer()}>
                <HamburgerSvg/>
              </TouchableOpacity>
            )
          },
          tabBarIcon: () => <HomeSvg />,
        
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={() => ({
          headerShown: false,
          tabBarIcon: () => <WalletSvg />,
        })}
      />
      <Tab.Screen
        name="Launch Activity"
        component={LaunchActivity}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          headerShown: false,
          tabBarIcon: () => <LaunchActivitySvg />,
        })}
      />
      <Tab.Screen
        name="Verve Deals"
        component={VerveDeals}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          headerShown: false,
          tabBarIcon: () => <VerveDealsSvg />,
        })}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          headerShown: false,
          tabBarIcon: () => <SettingsSvg />,
        })}    
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
