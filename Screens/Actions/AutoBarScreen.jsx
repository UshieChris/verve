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
import styles from '../../styles/messageStyle';
import {useNavigation} from '@react-navigation/native';

function Autobar() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 55,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <LeftArrowSvg />
      </TouchableOpacity>
      <View>
        <QuestSvg />
      </View>
    </View>
  );
}
export default Autobar;
