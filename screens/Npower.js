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

const Npower = ({navigation}) => {
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
      importance: 4,
      channelId: 'fmha_events',
      channelName: 'FMHA Events',
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
          if (strTime === '2023-05-28') {
            // Custom event on February
            items[strTime].push({
              name: 'Nationwide N-Build In-centre Graduation ceremony in collaboration with Councils on the 23rd',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-05-28T15:55:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                channelId: 'fmha_events',
                message:
                  'Nationwide N-Build In-centre Graduation ceremony in collaboration with Councils on the 23rd', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-04-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'N-Knowledge Expansion Graduation Ceremony in collaboration with TSPs in the geopolitical zones on the 23rd',
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
                channelId: 'fmha_events',
                message:
                  'N-Knowledge Expansion Graduation Ceremony in collaboration with TSPs in the geopolitical zones on the 23rd', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Nationwide End of N-Power Batch C2 Graduate Programme on the 23rd ',
              height: 50,
            });
            const eventDate = new Date('2023-09-23T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmha_events',
                message:
                  'Nationwide End of N-Power Batch C2 Graduate Programme on the 23rd ', // Notification message
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
              <Text style={{width: 200, color: '#000'}}>{item.name}</Text>
              <Avatar.Text label="N" style={{backgroundColor: '#99dd7a'}} />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: 0,
          paddingVertical: 20,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          position: 'absolute',
          left: 20,
          zIndex: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{backgroundColor: '#828282', padding: 5, borderRadius: 10}}>
          <Icon name="arrow-back" size={30} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={timeToString(now.getTime())}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Npower;
