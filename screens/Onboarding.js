/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const Onboarding = ({navigation}) => {
  const [hidden, setHidden] = useState(false);

  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = auth().onAuthStateChanged(user => {
  //     if (user) {
  //       // User is signed in
  //       setLoading(false);
  //       navigation.replace('Home');
  //     } else {
  //       // No user is signed in
  //       setLoading(false);
  //       navigation.replace('Login');
  //     }
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  });

  const changeStatusBarVisibility = () => setHidden(!hidden);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
  );

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  return (
    <View
      style={{
        backgroundColor: '#121212',
        alignItems: 'center',
        height: height,
        paddingTop: height / 1.2,
      }}>
      <StatusBar
        backgroundColor="#121212"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <ActivityIndicator size="large" color="#99dd7a" />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../assets/playstore.png')}
          style={{width: 50, height: 50, borderRadius: 10}}
        />
        <Text
          style={{
            fontSize: 26,
            fontWeight: '600',
            color: '#99dd7a',
            marginLeft: 10,
          }}>
          FMHA Event Calendar
        </Text>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
