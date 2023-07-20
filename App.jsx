import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Carousel from './components/Carousel';
import Signin from './Screens/LoginScreen/SignInScreen';
import Signup from './Screens/LoginScreen/SignUpScreen';
import Message from './Screens/LoginScreen/MessageScreen';
import Createpin from './Screens/LoginScreen/CreatePinScreen';
import SplashScreen from './Screens/ActionsScreen/SplashScreen';
import Dashboard from './Screens/ProfileScreen/DashboardScreen';
import Settings from './Screens/NavigationScreen/TabNavigation/SettingsScreen';
import {store} from './create-store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();
// import TabNavigator from './navigator/TabNavigator';
import DrawerNavigator from './navigator/DrawerNavigator';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Carousel"
            component={Carousel}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Message"
            component={Message}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Createpin"
            component={Createpin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
