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

const Humanitarian = ({navigation}) => {
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
          if (strTime === '2023-05-23') {
            // Custom event on February
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
            // Schedule local notification for April 15
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
          } else if (strTime === '2023-05-24') {
            // Custom event on December 15
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-05-24T09:00:00');
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
          } else if (strTime === '2023-05-25') {
            // Custom event on December 15
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-05-25T09:00:00');
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
          } else if (strTime === '2023-05-26') {
            // Custom event on December 15
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-05-26T09:00:00');
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
          } else if (strTime === '2023-05-27') {
            // Custom event on December 15
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-05-27T09:00:00');
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
          } else if (strTime === '2023-05-28') {
            // Custom event on December 15
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-05-28T09:00:00');
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
          } else if (strTime === '2023-06-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Refugees Day on 20th',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-20T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: ' World Refugees Day on 20th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-30') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Day against Human Trafficking on the 30th',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-30T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'World Day against Human Trafficking on the 30th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-08-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Humanitarian Day on the 19th',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-08-19T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'World Humanitarian Day on the 19th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-08-30') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Day for the Disappear on the 30th',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-08-30T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'International Day for the Disappear on the 30th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'United Nations General Assembly in New York',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'United Nations General Assembly in New York', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Executive Committee meeting of the United Nations High Commission on Refugees in New York ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-12T09:00:00');
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
                  'Executive Committee meeting of the United Nations High Commission on Refugees in New York ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-10-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Day for Disaster Risk Reduction on the 13th ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-10-13T09:00:00');
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
                  'International Day for Disaster Risk Reduction on the 13th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'National Migration Dialogue',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-11-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'National Migration Dialogue', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'United Nations Climate Change 2023 (Cop 28)',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-11-06T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'United Nations Climate Change 2023 (Cop 28)', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-12-13T09:00:00');
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
                  'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-14') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva  ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-12-14T09:00:00');
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
                  'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-26') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-05-26T13:50:00');
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
                  'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-12-15T09:00:00');
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
                  'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva', // Notification message
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
              <Avatar.Text label="H" style={{backgroundColor: '#99dd7a'}} />
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

export default Humanitarian;
