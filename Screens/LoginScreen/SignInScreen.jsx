import React, {useState, useEffect} from 'react';
import CustomButton from '../../helpers/Button';
import {EyeSvg, EyeSlash} from '../../helpers/svgs';

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
import {useDispatch, useSelector} from 'react-redux';
import Autobar from '../ActionsScreen/AutoBarScreen';
import {Input} from '../../helpers/Input';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import loginUser from '../../redux-flow/actions/login_action';

function Signin() {
  const [inputs, setInputs] = useState({emailOrPhoneNumber: '', password: ''});
  const [loginStatus, setLoginStatus] = useState(false);
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.login_reducer);

  const onSubmit = () => {
    dispatch(loginUser(inputs));
    console.log(inputs);
    console.log(loginState);
  };

  useEffect(() => {
    if (loginState.login) {
      setLoginStatus(true);
      console.log(loginState);
      navigation.navigate('Signup');
    } else {
      setLoginStatus(false);
    }
  }, [loginState.login]);

  return (
    <View style={{padding: 20}}>
      <Autobar />
      <Text style={styles.login}>Login</Text>
      <View style={{marginBottom: 30}}>
        <View>
          <Input
            label="Email"
            value={inputs.emailOrPhoneNumber}
            setValue={text => handleOnchange(text, 'emailOrPhoneNumber')}
          />
        </View>
        <View style={styles.passwordContainer}>
          <Input
            customShowPasswordComponent={<EyeSvg />}
            customHidePasswordComponent={<EyeSlash />}
            label="Password"
            isPassword
            value={inputs.password}
            setValue={text => handleOnchange(text, 'password')}
          />
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
        {loginStatus && <Text>Nonsense</Text>}
        <View style={styles.autcontainer}>
          <CustomButton title="Log in" onPress={onSubmit} />
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
