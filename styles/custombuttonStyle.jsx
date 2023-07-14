import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#1A73E8",
      fontFamily: 'Rubik-Bold',
      borderRadius: 50,
      paddingVertical: 18,
      paddingHorizontal: 12,
      marginTop: 30,
      alignSelf:'stretch',
      justifyContent:'center',
      marginBottom:25
    },
    appButtonText: {
      fontSize: 18,
      color: "#FFFFFF",
      textAlign:'center',
      fontWeight: "bold",
      lineHeight:18,
      textTransform: "uppercase"
    }
  });