import React, {useState} from 'react';
import CustomButton from '../../helpers/Button';
import {Text, View, TextInput} from 'react-native';
import styles from '../../styles/messageStyle';
import {useNavigation} from '@react-navigation/native';
import Autobar from '../ActionsScreen/AutoBarScreen';

function Createpin({navigation}) {
  return (
    <View style={{padding: 20}}>
      <Autobar />
      <Text style={styles.login}>Create Your 4-Digit PIN</Text>
      <View style={styles.mailbox}>
        <Text style={styles.request}>
          To protect the security of your Verve eCash wallet, please register a
          4-Digit PIN code.
        </Text>

        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <TextInput placeholder=""></TextInput>
          </View>
          <View style={styles.box}>
            <TextInput placeholder=""></TextInput>
          </View>
          <View style={styles.box}>
            <TextInput placeholder=""></TextInput>
          </View>
          <View style={styles.box}>
            <TextInput placeholder=""></TextInput>
          </View>
          <View style={styles.box1}></View>
        </View>
        <View>
          <CustomButton
            title="Save Pin"
            onPress={() => navigation.navigate('TabNavigator')}
          />
        </View>
      </View>
    </View>
  );
}
export default Createpin;
