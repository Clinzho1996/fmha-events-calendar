/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import '@react-native-firebase/app';
import firebase from '@react-native-firebase/app';
firebase.initializeApp();

PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },
  popInitialNotification: true,
  requestPermissions: true,
});

AppRegistry.registerComponent(appName, () => App);
