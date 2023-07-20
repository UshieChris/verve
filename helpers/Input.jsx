import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FloatingLabelInput} from 'react-native-floating-label-input';

export const Input = ({
  value,
  setValue,
  label,
  isPassword,
  customShowPasswordComponent,
  customHidePasswordComponent,
  floatStyle,
}) => {
  const [isFocused, setFocused] = useState(false);
  const [isCheck, setCheck] = useState(false)

  useEffect(() => {
    if(label =='Email') setCheck(!isCheck)
  }, []);

  const handleChangeText =(inputText)=>{
    setValue(inputText)
}

  return (
    <View >
      <FloatingLabelInput
        label={label}
        isPassword={isPassword}
        containerStyles={[
          styles.inputContainer,
          (isCheck) && styles.backgroundStyle,
          (isFocused || value) && styles.inputContainerFocused,
        ]}
        labelStyles={[styles.labelStyle]}
        togglePassword={false}
        value={value}
        onChangeText={handleChangeText}
        customShowPasswordComponent={customShowPasswordComponent}
        customHidePasswordComponent={customHidePasswordComponent}
        customLabelStyles={{
          colorFocused: '#1A73E8',
          fontSizeFocused: 12,
          
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 0,
    backgroundColor: '#E8E8E890',
    height: 50,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 16,
    paddingTop: 5,
    width:20,
  },
  backgroundStyle: { backgroundColor: '#F5F5F5',},
  inputContainerFocused: {
    borderBottomWidth: 1,
    borderColor: '#1A73E8',
  },
  error: {
    borderColor: 'red',
  },
  labelStyle: {
    color: '#0C0C0C'
  },
});
