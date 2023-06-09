/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Platform} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import PushNotification, {Importance} from 'react-native-push-notification';
import BackgroundFetch from 'react-native-background-fetch';
import messaging from '@react-native-firebase/messaging';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Home = ({navigation}) => {
  const [items, setItems] = useState({});
  const now = new Date();

  useEffect(() => {
    // Request permission for notifications
    messaging()
      .requestPermission()
      .then(() => {
        // Get the FCM token
        return messaging().getToken();
      })
      .then(token => {
        console.log('FCM Token:', token);
      })
      .catch(error => {
        console.log('Failed to get FCM token:', error);
      });

    // Configure background message handling
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background:', remoteMessage);
    });

    // Create notification channel

    PushNotification.createChannel({
      allowWhileIdle: true,
      importance: Importance.HIGH,
      channelId: 'fmhadmsd-events',
      channelName: 'FMHADMSD Events',
    });

    //Set up notification listeners
    PushNotification.configure({
      // Called when a remote or local notification is received
      onNotification: function (notification) {
        console.log('Notification:', notification);
      },
    });

    return () => {
      // Clean up notification listeners
      PushNotification.removeAllDeliveredNotifications();
      PushNotification.cancelAllLocalNotifications();
    };
  }, []);

  useEffect(() => {
    // Configure the background fetch
    BackgroundFetch.configure(
      {
        minimumFetchInterval: 15, // Fetch interval in minutes (minimum 15 minutes)
        stopOnTerminate: false, // Continue background fetch when the app is terminated
        startOnBoot: true, // Start background fetch on device boot
        enableHeadless: true, // Enable background fetch to run in headless mode
        forceReload: false, // Force background fetch event even if it hasn't changed
        requiredNetworkType: BackgroundFetch.NETWORK_TYPE_NONE, // Specify the required network connection
      },
      async taskId => {
        // Background fetch event handler
        console.log('[BackgroundFetch] Task ID:', taskId);

        // Implement your logic for background fetch here
        // You can fetch new data, update the notifications, etc.

        BackgroundFetch.finish(taskId); // Call this when your background fetch task is completed
      },
      error => {
        console.log('[BackgroundFetch] Failed to configure:', error);
      },
    );

    // Start the background fetch
    BackgroundFetch.start();

    // Clean up the background fetch on component unmount
    return () => {
      BackgroundFetch.stop();
    };
  }, []);

  const loadItems = day => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          if (strTime === '2023-04-23') {
            // Custom event on February
            items[strTime].push({
              name: ' N/Power: Nationwide N-Build In-centre Graduation ceremony in collaboration with Councils on the 23rd  ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-04-23T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'N/Power: Nationwide N-Build In-centre Graduation ceremony in collaboration with Councils on the 23rd ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-04-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'N/Power: N-Knowledge Expansion Graduation Ceremony in collaboration with TSPs in the geopolitical zones on the 23rd',
              height: 50,
            });

            const eventDate = new Date('2023-04-23T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'N/Power: N-Knowledge Expansion Graduation Ceremony in collaboration with TSPs in the geopolitical zones on the 23rd', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-04-26') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NEDC: Distribution of Palliatives and Relief materials to IDPs and People of North East on the 26th ',
              height: 50,
            });
            const eventDate = new Date('2023-04-26T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'NEDC: Distribution of Palliatives and Relief materials to IDPs and People of North East on the 26th ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-04-26') {
            // Custom event on December 15
            items[strTime].push({
              name: 'RC&SI: Launching of the second edition of the Service Charter for the Ministry and the clusters under the NSIP on the 26th',
              height: 50,
            });
            const eventDate = new Date('2023-04-26T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'RC&SI: Launching of the second edition of the Service Charter for the Ministry and the clusters under the NSIP on the 26th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-04-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Girls in ICT Day on the 27th ',
              height: 50,
            });
            const eventDate = new Date('2023-04-27T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'International Girls in ICT Day on the 27th ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Workers / May Day on the 1st  @ the Eagle Square',
              height: 50,
            });
            const eventDate = new Date('2023-05-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'Workers / May Day on the 1st  @ the Eagle Square', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NEDC: NEDC Seminar on the 1st',
              height: 50,
            });
            const eventDate = new Date('2023-05-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'NEDC: NEDC Seminar on the 1st', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'GEEP: GEEP 2.0 Road Show from the 1st – 9th in the Six (6) geopolitical zones   ',
              height: 50,
            });
            const eventDate = new Date('2023-05-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'GEEP: GEEP 2.0 Road Show from the 1st – 9th in the Six (6) geopolitical zones   ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-02') {
            // Custom event on December 15
            items[strTime].push({
              name: 'RC&SI: Commencement of 2023 Humanitarian Innovation Challenge from 2nd - 12th',
              height: 50,
            });
            const eventDate = new Date('2023-05-02T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'RC&SI: Commencement of 2023 Humanitarian Innovation Challenge from 2nd - 12th ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NSCC: Launch of Healthy Ageing Walk For Life Program and Training Manual for Health Promotion on the 4th ',
              height: 50,
            });
            const eventDate = new Date('2023-05-04T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'NSCC: Launch of Healthy Ageing Walk For Life Program and Training Manual for Health Promotion on the 4th ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NEDC: Handover of NEDC Mass Housing Units on the 4th @ Bauchi ',
              height: 50,
            });
            const eventDate = new Date('2023-05-04T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'NEDC: Handover of NEDC Mass Housing Units on the 4th @ Bauchi ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'GEEP: Dashboard/GEEP Magazine from 4th – 9th @ Abuja.',
              height: 50,
            });
            const eventDate = new Date('2023-05-04T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'GEEP: Dashboard/GEEP Magazine from 4th – 9th @ Abuja.', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'PRS: Development Plan Implementation Unit on the 5th @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-05-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'PRS: Development Plan Implementation Unit on the 5th @ Abuja', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-07-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 27th',
              height: 50,
            });
            const eventDate = new Date('2023-07-27T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 27th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NEDC: Ground-Breaking for Ngom-Zabarmari-Gongulong-Kajari Phase I &II on the 8th ',
              height: 50,
            });
            const eventDate = new Date('2023-05-08T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'NEDC: Ground-Breaking for Ngom-Zabarmari-Gongulong-Kajari Phase I &II on the 8th ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NSCC: Launch of Report on Assessment of ICOPE GAPs in Primary Health Care System on the 10th ',
              height: 50,
            });
            const eventDate = new Date('2023-05-10T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'NSCC: Launch of Report on Assessment of ICOPE GAPs in Primary Health Care System on the 10th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-08-28') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Rehabilitation and Reconstruction of Tertiary and Health Institutions on the 28th ',
              height: 50,
            });
            const eventDate = new Date('2023-08-28T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'Rehabilitation and Reconstruction of Tertiary and Health Institutions on the 28th ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'RC&SI: Opening Competition on memorization of FCSSIP25 and its enablers from 15th – 17th ',
              height: 50,
            });
            const eventDate = new Date('2023-05-14T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'RC&SI: Opening Competition on memorization of FCSSIP25 and its enablers from 15th – 17th ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'RC&SI: Sensitization Workshop on Innovation, Anti – corruption & Transparency from 22nd – 26th',
              height: 50,
            });
            const eventDate = new Date('2023-05-22T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'RC&SI: Sensitization Workshop on Innovation, Anti – corruption & Transparency from 22nd – 26th ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NAPTIP: Inaugural Joint Technical Working Group meeting to design the work plan for the implementation of the Nigeria-Gambia MoU to Prevent, Suppress and Punish Trafficking in Persons Especially Women and Children in collaboration with Gambia and International partners from 15th – 16th @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-05-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'NAPTIP: Inaugural Joint Technical Working Group meeting to design the work plan for the implementation of the Nigeria-Gambia MoU to Prevent, Suppress and Punish Trafficking in Persons Especially Women and Children in collaboration with Gambia and International partners from 15th – 16th @ Abuja', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NEDC: Handover of Rapid Response Intervention (RRI) Projects in Borno on the 22nd',
              height: 50,
            });
            const eventDate = new Date('2023-05-22T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'NEDC: Handover of Rapid Response Intervention (RRI) Projects in Borno on the 22nd', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-23') {
            // Custom event on December 15
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
            const eventDate = new Date('2023-05-23T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NCPWD: National Summit on Access to Justice for PWDs on 23rd',
              height: 50,
            });
            const eventDate = new Date('2023-05-23T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'NCPWD: National Summit on Access to Justice for PWDs on 23rd', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-02') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NEDC: Sensitization on drug abuse on the 2nd',
              height: 50,
            });
            const eventDate = new Date('2023-06-02T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'NEDC: Sensitization on drug abuse on the 2nd', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NEDC: Handover of NEDC Mass Housing Units on the 5th @ Gombe  ',
              height: 50,
            });
            const eventDate = new Date('2023-06-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'NEDC: Handover of NEDC Mass Housing Units on the 5th @ Gombe   ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'RC&SI: Sensitization Workshop on FCSSIP25 on Team Building. From 5th - 9th ',
              height: 50,
            });
            const eventDate = new Date('2023-06-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'RC&SI: Sensitization Workshop on FCSSIP25 on Team Building. From 5th - 9th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-05') {
            // Custom event on December 15
            items[strTime].push({
              name: ' NAPTIP: inauguration of 4 State Task Forces against Human Trafficking in collaboration with IOM from 5th – 16th @ Yobe, kebbi, Sokoto and Imo States',
              height: 50,
            });
            const eventDate = new Date('2023-06-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  ' NAPTIP: inauguration of 4 State Task Forces against Human Trafficking in collaboration with IOM from 5th – 16th @ Yobe, kebbi, Sokoto and Imo States', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-05') {
            // Custom event on December 15
            items[strTime].push({
              name: ' GEEP: Townhall Meeting from the 5th – 9th in the Six (6) geopolitical zones',
              height: 50,
            });
            const eventDate = new Date('2023-06-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  ' GEEP: Townhall Meeting from the 5th – 9th in the Six (6) geopolitical zones', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-28') {
            // Custom event on December 15
            items[strTime].push({
              name: ' testing notifIcation',
              height: 50,
            });
            const eventDate = new Date('2023-05-28T14:40:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: ' Please work i don tire', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-26') {
            // Custom event on December 15
            items[strTime].push({
              name: ' testing notifIcation on real device',
              height: 50,
            });
            const eventDate = new Date('2023-05-26T15:45:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: ' Notification testing', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'PRS: Development Plan Implementation Unit on the 7th @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-06-07T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'PRS: Development Plan Implementation Unit on the 7th @ Abuja', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'GEEP: FarmerMoni Enumeration Supervision from 12th – 24th in the Six (6) geopolitical zones',
              height: 50,
            });
            const eventDate = new Date('2023-06-12T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'GEEP: FarmerMoni Enumeration Supervision from 12th – 24th in the Six (6) geopolitical zones', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else {
            const numItems = Math.floor(Math.random() * 3 + 1);
            for (let j = 0; j < numItems; j++) {
              items[strTime].push({
                name: 'No Event on ' + strTime + ' #' + j,
                height: Math.max(50, Math.floor(Math.random() * 150)),
              });
            }
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = item => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card
          style={{
            backgroundColor: '#fff',
          }}>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'column'}}>
                <Icon name="square" size={20} color="#99dd7a" />
                <Text style={{width: 200, color: '#000'}}>{item.name}</Text>
              </View>
              <Avatar.Text label="F" style={{backgroundColor: '#99dd7a'}} />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={timeToString(now.getTime())}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
