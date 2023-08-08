import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Wallet from '../Screens/NavigationScreen/TabNavigation/WalletScreen';
import Settings from '../Screens/NavigationScreen/TabNavigation/SettingsScreen';
import Home from '../Screens/NavigationScreen/TabNavigation/HomeScreen';
import Logout from '../Screens/NavigationScreen/DrawerNavigation/LogOutScreen';
import Events from '../Screens/NavigationScreen/DrawerNavigation/EventsScreen';
import Friends from '../Screens/NavigationScreen/DrawerNavigation/FriendsScreen';
import TabNavigator from './TabNavigator';
import Groups from '../Screens/NavigationScreen/DrawerNavigation/GroupsScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
function getHeaderTitle(route) {
    return getFocusedRouteNameFromRoute(route) ?? 'Home';
  }

export const StackNavigators = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
            headerShown: false
          })}
        />
        <Stack.Screen name="Friends" component={Friends}  options={{headerShown: false}}/>
        <Stack.Screen name="Groups" component={Groups}  options={{headerShown: false}}/>
        <Stack.Screen name="Events" component={Events}  options={{headerShown: false}}/>
        <Stack.Screen name="Logout" component={Logout}  options={{headerShown: false}}/>
      </Stack.Navigator>
    );
  };