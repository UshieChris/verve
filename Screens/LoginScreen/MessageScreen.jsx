import React, {useState} from 'react';
import CustomButton from '../../helpers/Button';
import {EyeSvg} from '../../helpers/svgs';

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
import {LeftArrowSvg, QuestSvg} from '../../helpers/svgs';
const originalWidth = 744;
const originalHeight = 539.286;
const aspectRatio = originalWidth / originalHeight;
import styles from '../../styles/messageStyle';
import {useNavigation} from '@react-navigation/native';
import Autobar from '../ActionsScreen/AutoBarScreen';

function Message() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const navigation = useNavigation();

  return (
    <View style={{padding: 20}}>
      <Autobar />
      <Text style={styles.login}>We sent you a message</Text>
      <View style={styles.mailbox}>
        <Text style={styles.request}>
          Please enter the 4 digit code we sent via text message to
          +2348180000456
        </Text>

        <View style={styles.boxContainer}>
          <View style={styles.box} >
          <TextInput placeholder=""></TextInput>
          </View>
          <View style={styles.box} >
          <TextInput placeholder=""></TextInput>
          </View>
          <View style={styles.box} >
          <TextInput placeholder=""></TextInput>
          </View>
          <View style={styles.box} >
          <TextInput placeholder=""></TextInput>
          </View>
          <View style={styles.box1}></View>
        </View>
        <Text style = {styles.comfirmtext}>The text should arrive witthin 45 seconds</Text>
        <Text style = {styles.changeno}>Change my phone number</Text>
        <View >
          <CustomButton title="Continue" onPress={()=>navigation.navigate('Createpin')} />
        </View>
      </View>
    </View>
  );
}
export default Message;
