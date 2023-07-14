import React,{useState} from "react";
import {View, Text, TextInput, StyleSheet } from "react-native";
import styles from "../styles/inputStyle";


export const Input = ({onTextChange, width, placeholderText}) =>{
    const [text, setText] = useState("")
    const [hasFocus, setHasFocus] = useState(false);

    const handleChangeText =(inputText)=>{
        setText(inputText);
        onTextChange(inputText)
    }
    return(
        <View style={styles.InputWrapper}>
          {hasFocus && text.length >= 1 && (
            <Text style={styles.labelInput}>{placeholderText}</Text>
          )}
          <TextInput
            value={text}
            onChangeText={handleChangeText}
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
            style={!hasFocus ? styles.textInput : styles.focusedTextInput}
           placeholder={placeholderText}
          />
        </View>
    )
}
