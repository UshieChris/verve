import CustomButton from '../../helpers/Button';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import FloatingLabelInput from 'react-native-floating-label-input';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import FloatLabelTextInput from 'react-native-floating-label-text-input';

import {TextInput} from 'react-native';

import styles from '../../styles/signupStyle';
import {useNavigation} from '@react-navigation/native';
import Autobar from '../ActionsScreen/AutoBarScreen';
import {Input} from '../../helpers/Input';
import {EyeSvg, EyeSlash} from '../../helpers/svgs';

function Signup() {
  const navigation = useNavigation();
  const [cont, setCont] = useState('');
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    code: '',
    phoneNumber: '',
  });
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  return (
    <View style={{padding: 20}}>
      <Autobar />
      <Text style={styles.login}>Tell us about you.</Text>
      <View style={styles.singupmd}>
        <View style={styles.nameBox}>
          <View style={styles.firstName}>
            <Input
              label="First Name"
              value={inputs.firstName}
              setValue={text => handleOnchange(text, 'firstName')}
            />
          </View>
          <View style={styles.lastName}>
            <Input
              label="Last Name"
              value={inputs.lastName}
              setValue={text => handleOnchange(text, 'lastName')}
            />
          </View>
        </View>
        <View style={styles.mailContainer}>
          <Input
            label="Email Address"
            value={inputs.email}
            setValue={text => handleOnchange(text, 'email')}
          />
        </View>
        <View style={styles.contact}>
          <View style={styles.contactCd}>
            <Input
              label="+234"
              value={inputs.code}
              setValue={text => handleOnchange(text, 'code')}
            />
          </View>
          <View style={styles.contactNo}>
            <Input
              label="Mobile Number"
              value={inputs.phoneNumber}
              setValue={text => handleOnchange(text, 'phoneNumber')}
            />
          </View>
        </View>
        <View style={styles.passwordContainer}>
          <Input
            customShowPasswordComponent={<EyeSvg />}
            customHidePasswordComponent={<EyeSlash />}
            label="Set Password"
            isPassword
            value={inputs.password}
            setValue={text => handleOnchange(text, 'password')}
          />
        </View>
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
