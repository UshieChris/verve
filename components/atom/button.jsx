const {View, TouchableOpacity,  StyleSheet, Text} = require('react-native');
import { RightArrowSvg } from './svgs';
const CustomButton = () => (
  <TouchableOpacity style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>Get Started</Text>
    <RightArrowSvg />
  </TouchableOpacity>
);

export default CustomButton

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });