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
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Procure = ({navigation}) => {
  const [items, setItems] = useState({});
  const now = new Date();

  useEffect(() => {
    createChannel();
  });

  useEffect(() => {
    const requestNotificationPermission = async () => {
      const alertPermission = await checkNotificationPermission('alert');
      const soundPermission = await checkNotificationPermission('sound');
      const badgePermission = await checkNotificationPermission('badge');

      if (
        alertPermission === RESULTS.DENIED ||
        soundPermission === RESULTS.DENIED ||
        badgePermission === RESULTS.DENIED
      ) {
        const requestedPermissions = [];

        if (alertPermission === RESULTS.DENIED) {
          requestedPermissions.push(PERMISSIONS.ANDROID.NOTIFICATIONS);
        }
        if (soundPermission === RESULTS.DENIED) {
          requestedPermissions.push(PERMISSIONS.ANDROID.NOTIFICATIONS);
        }
        if (badgePermission === RESULTS.DENIED) {
          requestedPermissions.push(PERMISSIONS.ANDROID.NOTIFICATIONS);
        }

        if (requestedPermissions.length > 0) {
          requestPermissions(requestedPermissions);
        }
      }

      // Check the notification permission status
      PushNotification.checkPermissions(permissions => {
        console.log('Notification Permissions:', permissions);
      });
    };

    const checkNotificationPermission = async type => {
      let permission;

      if (Platform.OS === 'ios') {
        permission = await check(PERMISSIONS.IOS[type]);
      } else {
        permission = await check(PERMISSIONS.ANDROID[type]);
      }

      return permission;
    };

    const requestPermissions = async permissions => {
      try {
        await request(permissions);
      } catch (error) {
        console.log('Error requesting permissions:', error);
      }
    };

    requestNotificationPermission();

    // Cleanup on component unmount
    return () => {
      // Cancel any pending notifications
      PushNotification.cancelAllLocalNotifications();
      // Clear the notification permission status
      PushNotification.clearAllNotifications();
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


  const createChannel = () => {
    PushNotification.createChannel({
      allowWhileIdle: true,
      importance: Importance.HIGH,
      channelId: 'fmhadmsd-events',
      channelName: 'FMHADMSD Events',
    });
  };

  const handleNotification = item => {
    PushNotification.localNotification({
      allowWhileIdle: true,
      importance: Importance.HIGH,
      channelId: 'fmhadmsd-events',
      title: 'FMHADMSD Events',
      message: item.name,
    });
  };

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
              name: 'Inauguration of the Procurement planning Committee @ the Ministry’s Conference Room',
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
                  'Inauguration of the Procurement planning Committee @ the Ministry’s Conference Room', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-04-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Meetings on Projects to be advertised @ the Ministry’s Conference Room',
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
                message:
                  'Meetings on Projects to be advertised @ the Ministry’s Conference Room', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Advertisement/Bid Solicitation in National Dailies and Federal Tender Journal ',
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
                  'Advertisement/Bid Solicitation in National Dailies and Federal Tender Journal  ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Evaluation (Technical & Financial) @ the Ministry’s Conference Room',
              height: 50,
            });
            const eventDate = new Date('2023-05-11T09:00:00');
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
                  'Evaluation (Technical & Financial) @ the Ministry’s Conference Room', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Seeking approval for the commencement of the Ministerial Tender’s Board (MTB) for consideration of contract ',
              height: 50,
            });
            const eventDate = new Date('2023-06-13T09:00:00');
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
                  'Seeking approval for the commencement of the Ministerial Tender’s Board (MTB) for consideration of contract', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'MTB meeting for consideration of contracts',
              height: 50,
            });
            const eventDate = new Date('2023-06-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'MTB meeting for consideration of contracts', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Submission of the MTB Extracts for HM’s concurrence',
              height: 50,
            });
            const eventDate = new Date('2023-06-19T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'Submission of the MTB Extracts for HM’s concurrence', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Issuance of Contract Award Letters',
              height: 50,
            });
            const eventDate = new Date('2023-06-27T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'Issuance of Contract Award Letters', // Notification message
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
      <TouchableOpacity
        style={{marginRight: 10, marginTop: 17}}
        onPress={() => {
          handleNotification(item);
        }}>
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
              <Avatar.Text label="P" style={{backgroundColor: '#99dd7a'}} />
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

export default Procure;
