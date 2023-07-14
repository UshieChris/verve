const {View, TouchableOpacity, StyleSheet, Text} = require('react-native');
import { styles } from '../styles/custombuttonStyle';
const CustomButton = ({
  onPress,
  title,
  backgroundColor = '#1A73E8',
  color = '#FFFFFF',
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{...styles.appButtonContainer, backgroundColor}}>
    <Text style={{...styles.appButtonText, color}}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;
