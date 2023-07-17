

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    StatusBar,
    TextInput,
    SafeAreaView,
  } from 'react-native';
  
  function Events({
    title,
    textsm,
    textred,
    url,
    backgroundColor = '#D7EBEF80',
  }) {
    return (
      <SafeAreaView>
        <View >
          <Text style={{paddingTop: 50, fontSize: 22}}>Welcome to Home page</Text>
        </View>
      </SafeAreaView>
    );
  }
  export default Events;