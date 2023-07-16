import CustomButton from '../../helpers/Button';
import {EyeSvg} from '../../helpers/svgs';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import FloatingLabelInput from 'react-native-floating-label-input';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import FloatLabelTextInput from 'react-native-floating-label-text-input';

import {TextInput} from 'react-native';

import styles from '../../styles/signupStyle';
import {useNavigation} from '@react-navigation/native';
import Autobar from '../ActionsScreen/AutoBarScreen';
import {Input} from '../../helpers/Input';

function Signup() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const navigation = useNavigation();
  const [cont, setCont] = useState('');
  const [show, setShow] = useState(false);

  return (
    <View style={{padding: 20}}>
      <Autobar />
      <Text style={styles.login}>Tell us about you.</Text>
      <View style={styles.singupmd}>
        <View style={styles.nameBox}>
          <View style={styles.firstName}>
            <TextInput placeholder="First Name" />
          </View>
          <View style={styles.lastName}>
            <TextInput placeholder="Last Name" />
          </View>
        </View>
        <TextInput style={styles.mailContainer} placeholder="Email Address" />
        <View style={styles.contact}>
          <View style={styles.contactCd}>
            <TextInput placeholder="+234" />
          </View>
          <View style={styles.contactNo}>
            <TextInput placeholder="Mobile Number" />
            {/* <FloatLabelTextInput
               placeholder={"name of field"}
               value={"value of field"}
            /> */}
             <FloatingLabelInput
                label={'label'}
                isPassword
                togglePassword={show}
                value={cont}
                onChangeText={value => setCont(value)}
                customShowPasswordComponent={<Text>Show</Text>}
                customHidePasswordComponent={<Text>Hide</Text>}
              />
          </View>
        </View>
        <View style={[styles.passwordContainer, styles.container]}></View>
        <View>
          <CustomButton
            title="CREATE ACCOUNT"
            onPress={() => navigation.navigate('Message')}
          />
        </View>
      </View>
    </View>
  );
}
export default Signup;
