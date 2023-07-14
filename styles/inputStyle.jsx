import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
    InputWrapper: {
        position: 'relative',
      },
    
      labelInput: {
        fontSize: 12,
        color: '#1A73E8',
        position: 'absolute',
        top: 2,
        bottom: 5,
        marginBottom:10,
        left: 16,
       
      },
      textInput: {  
        paddingHorizontal: 16,
        fontSize: 16,
      },
    
      focusedTextInput: {
        paddingHorizontal: 16,
        fontSize: 16,
        paddingTop:15,
      },
})

export default styles;