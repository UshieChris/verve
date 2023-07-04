import React,{useState} from 'react';

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
} from 'react-native';
import {LeftArrowSvg, QuestSvg} from './svgs';
const originalWidth = 744;
const originalHeight = 539.286;
const aspectRatio = originalWidth / originalHeight;
import styles from '../styles/signinstyle';

function Signin({navigation}) {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

  return (
    <View style={{padding: 20}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Carousel')}>
          <LeftArrowSvg />
        </TouchableOpacity>
        <View>
          <QuestSvg />
        </View>
      </View>
      <Text style={styles.login}>Login</Text>
      <View >
      <TextInput
          secureTextEntry={true}
          placeholder="Password"
        />
      </View>
    </View>
  );
}
export default Signin;
