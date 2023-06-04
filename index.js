/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import '@react-native-firebase/app';
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBPDMuFeRzEDBn7bJE9esmc6cM5Rlz69i4',
  authDomain: 'fmhaeventcalendar-626af.firebaseapp.com',
  projectId: 'fmhaeventcalendar',
  storageBucket: 'fmhaeventcalendar.appspot.com',
  messagingSenderId: '614430523328',
  appId: '1:614430523328:web:bdacd4485f3674fee0d225',
  measurementId: 'G-SB6JWFS1ZG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
