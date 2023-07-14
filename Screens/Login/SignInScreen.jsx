import React, {useState} from 'react';
import CustomButton from '../../helpers/button';
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
import styles from '../../styles/signinStyle';
import {useNavigation} from '@react-navigation/native';
import Autobar from '../Actions/AutoBarScreen';
import {Input} from '../../helpers/Input';

function Signin() {
  const [inputs, setInputs] = useState({email: '', password: ''});
  const navigation = useNavigation();
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  return (
    <View style={{padding: 20}}>
      <Autobar />
      <Text style={styles.login}>Login</Text>
      <View style={''}>
        <Input
          onTextChange={text => handleOnchange(text, 'email')}
          label="Email"
          placeholderText="Email or Mobile"
        />
        <View style={[styles.passwordContainer, styles.container]}>
          <Input
            onTextChange={text => handleOnchange(text, 'email')}
            label="Password"
            placeholderText="Password"
          />
          <EyeSvg style={styles.eyecheck} />
        </View>

        <View style={[styles.container, styles.mb]}>
          <View style={styles.container}>
            <Text style={styles.modulelighttext}>Forget Password?</Text>
            <Text style={styles.moduleboldtext}>Recover</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.modulelighttext}>Login with</Text>
            <Text style={styles.moduleboldtext}> FaceID</Text>
          </View>
        </View>
        <View style={styles.autcontainer}>
          <CustomButton title="Log in" />
          <Text style={styles.ortext}>or</Text>
          <CustomButton
            title="Register"
            backgroundColor="#C5EDFF"
            color="#00425F"
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
      </View>
    </View>
  );
}
export default Signin;
