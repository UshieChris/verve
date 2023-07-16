import React, {useState} from 'react';
import CustomButton from '../../helpers/Button';
import {EyeSvg} from '../../helpers/svgs';
import {HamburgerSvg, VerveLogoSvg, CalenderSvg} from '../../helpers/svgs';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/dashboardStyle';
import FitnessCard from '../../components/FitnessCard';
const firstfit = require('../../assets/images/firstfit.png');
const secondfit = require('../../assets/images/secondfit.png');
const verveoffer = require('../../assets/images/verveoffer.png');
import ActivityLog from '../../components/ActivityLog';
import {postData} from '../../components/PostData';

function Dashboard() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={[styles.logo, styles.flex]}>
        <View style={styles.hamburger}>
          <HamburgerSvg />
        </View>
        <View style={styles.verveLogo}>
          <VerveLogoSvg />
        </View>
      </View>
      <View style={[styles.flex, styles.dateBox]}>
        <CalenderSvg />
        <Text
          style={{
            fontFamily: 'AvertaStd-Bold',
            letterSpacing: -0.02,
            fontSize: 14,
            color: '#4B4B4B',
            lineHeight: 15,
          }}>
          Mon, 18th Nov, 2020
        </Text>
      </View>
      <Text></Text>
      <View>
        <ActivityLog
          title="ACTIVITY LOG"
          step={1440}
          time={120}
          distance={11}
          calories={7.4}
        />
        <FitnessCard
          title="Fitness"
          textred="Get started"
          textsm="Don't Sit, Get Fit with Verve Life"
          url={firstfit}
        />
        <FitnessCard
          title="Food"
          textred="Get started"
          textsm="Eat Right, Be Healthy with Verve Life"
          backgroundColor="#E3E9F5"
          url={secondfit}
        />
      </View>
      <Text style={styles.post}>Posts based on your interest</Text>
      <ScrollView horizontal={true}>
        <View style={styles.postInterest}>
          {postData.map(item => (
            <ImageBackground
              source={item.image}
              key={item.id}
              style={styles.imageCover}
              imageStyle={{opacity: 0.8}}>
              <View style={styles.overlay}></View>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text style={styles.postBody}>{item.body}</Text>
              <Text style={styles.lastp}>{item.lastp}</Text>
            </ImageBackground>
          ))}
        </View>
      </ScrollView>
      <View style = {styles.verveOffer}>
        <Text style = {styles.verveText}>Verve offers</Text>
        <Image source={ verveoffer} style = {styles.verveImage}/>
      </View>
    </ScrollView>
  );
}
export default Dashboard;
