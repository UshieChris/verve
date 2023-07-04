import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Carousel from './components/atom/Carousel';
import Signin from './components/atom/Signin';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Carousel"
          component={Carousel}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Signin" component={Signin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
