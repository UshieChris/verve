import React, {useState} from 'react';
import styles from '../styles/fitnesscardStyle';

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
  SafeAreaView,
} from 'react-native';

function FitnessCard({
  title,
  textsm,
  textred,
  url,
  backgroundColor = '#D7EBEF80',
}) {
  return (
    <SafeAreaView style={{...styles.flex, backgroundColor}}>
      <View style={styles.flexMenu}>
        <Text style={styles.flexTitle}>{title}</Text>
        <Text style={styles.flexText}>{textsm}</Text>
        <Text style={styles.flexButton}>{textred}</Text>
      </View>
      <View style={styles.flexImage}>
        <Image style={styles.flexImageRight} source={url} />
      </View>
    </SafeAreaView>
  );
}
export default FitnessCard;
