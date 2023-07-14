import React, {useState} from 'react';
import styles from '../styles/activitylogStyle';

import {Text, View, Image, SafeAreaView} from 'react-native';
import {
  StepSvg,
  ClockSvg,
  CaloriesSvg,
  DistanceSvg,
  RightArrowSvg,
} from '../helpers/svgs';

function ActivityLog({title, step, time, calories, distance}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.flex}>
        <View style={styles.flexMenu}>
          <Text style={styles.flexTextOne}>Step</Text>
          <Text style={styles.flexCount}>Count</Text>
          <StepSvg style={styles.flexSvg}/>
          <Text style={styles.flexStepCount}>{step}</Text>
          <Text style={styles.flexStep}>STEPS</Text>
        </View>
        <View style={styles.flexMenu}>
          <Text style={styles.flexTextOne}>Active</Text>
          <Text style={styles.flexCount}>Time</Text>
          <ClockSvg  style={styles.flexSvg}/>
          <Text style={styles.flexStepCount}>{time}</Text>
          <Text style={styles.flexStep}>MIN</Text>
        </View>
        <View style={styles.flexMenu}>
          <Text style={styles.flexTextOne}>Calories</Text>
          <Text style={styles.flexCount}>Burnt</Text>
          <CaloriesSvg  style={styles.flexSvg}/>
          <Text style={styles.flexStepCount}>{calories}</Text>
          <Text style={styles.flexStep}>KCAL</Text>
        </View>
        <View style={styles.flexMenu}>
          <Text style={styles.flexTextOne}>Distance</Text>
          <Text style={styles.flexCount}>Covered</Text>
          <DistanceSvg style={styles.flexSvg}/>
          <Text style={styles.flexStepCount}>{distance}</Text>
          <Text style={styles.flexStep}>KM</Text>
        </View>
        <View style={styles.flexMenuFive}>
          <RightArrowSvg style={styles.flexImageRight} />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default ActivityLog;
