import React, {useState, useEffect} from 'react';
import CustomButton from '../../helpers/Button';
import {EyeSvg, EyeSlash} from '../../helpers/svgs';

import {Text, View, Alert} from 'react-native';

import styles from '../../styles/signinStyle';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Autobar from '../ActionsScreen/AutoBarScreen';
import {Input} from '../../helpers/Input';
import {Actions} from '../../redux-flow/actions';
import {SUCCESS, FAILURE} from '../../redux-flow/arsVariables';

function Signin() {
  const [inputs, setInputs] = useState({emailOrPhoneNumber: '', password: ''});
  const [empties, setEmpty] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    if (empties.password && !empties.emailOrPhoneNumber) {
      Alert.alert('Password cannot be empty');
    } else if (!empties.password && empties.emailOrPhoneNumber) {
      Alert.alert('Email or Phone number cannot be empty');
    } else if (empties.password && empties.emailOrPhoneNumber) {
      Alert.alert('Email and Password cannot be empty');
    }
  }, [empties]);

  const EmptyTest = (input, name) => {
    const text = input;
    const empty = text.length > 0 ? false : true;
    if (empty) {
      setEmpty(prevState => {
        return {
          ...prevState,
          [name]: `${name} cannot be empty!`,
        };
      });
    } else {
      setEmpty(prevState => {
        const emptyArr = prevState;
        delete emptyArr[name];
        return {
          ...prevState,
        };
      });
    }

    return empty;
  };

  const validate = obj => {
    const keysArr = Object.keys(obj);
    const valuesArr = Object.values(obj);
    const arrWithNoTruth = [];
    keysArr.forEach((key, i) => {
      arrWithNoTruth.push(EmptyTest(valuesArr[i], key));
    });
    return arrWithNoTruth.some(i => i === true);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.login_reducer);

  const onSubmit = () => {
    const validCheck = validate(inputs);
    if (validCheck) return;
    dispatch(Actions.loginUser(inputs));
  };

  useEffect(() => {
    if (loginState.login == SUCCESS) {
      setLoginStatus(true);
      navigation.navigate('DrawerNavigator');
    } else {
      dispatch(Actions.reset());
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
