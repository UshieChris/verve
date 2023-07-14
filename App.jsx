import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Carousel from './components/Carousel';
import Signin from './Screens/Login/SignInScreen';
import Signup from './Screens/Login/SignUpScreen';
import Message from './Screens/Login/MessageScreen';
import Createpin from './Screens/Login/CreatePinScreen';
import SplashScreen from './Screens/Actions/SplashScreen';
import Dashboard from './Screens/Profile/DashboardScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
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
        <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
        <Stack.Screen name="Message" component={Message} options={{headerShown: false}}/>
        <Stack.Screen name="Createpin" component={Createpin} options={{headerShown: false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
