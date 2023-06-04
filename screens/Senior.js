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

const Senior = ({navigation}) => {
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
          if (strTime === '2023-06-07') {
            // Custom event on December 15
            items[strTime].push({
              name: '14 Days 2nd Quarter Monitoring and Evaluation Visits to OSSAP-SDGs Project Sites across the Six (6) geo-political zones  ',
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
                  '14 Days 2nd Quarter Monitoring and Evaluation Visits to OSSAP-SDGs Project Sites across the Six (6) geo-political zones ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Baseline indicators of the SDGs with the latest information after the experience of Covid-19 in collaboration with the NBS in the 36 States of the Federation and the F.C.T',
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
                message:
                  'Baseline indicators of the SDGs with the latest information after the experience of Covid-19 in collaboration with the NBS in the 36 States of the Federation and the F.C.T', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monitoring of Capital Budget Performance in conjunction with the Budget Office of the Federation in the Six (6) geo-political zones',
              height: 50,
            });
            const eventDate = new Date('2023-06-22T09:00:00');
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
                  'Monitoring of Capital Budget Performance in conjunction with the Budget Office of the Federation in the Six (6) geo-political zones ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-29') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization of Corp Members during Orientation in the NYSC Camps across the country',
              height: 50,
            });
            const eventDate = new Date('2023-06-29T09:00:00');
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
                  'Sensitization of Corp Members during Orientation in the NYSC Camps across the country', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-07-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inter-Ministerial Committee on SDGs meeting @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-07-18T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'Inter-Ministerial Committee on SDGs meeting @ Abuja', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'United Nations General Assembly Ion the 5th n New York',
              height: 50,
            });
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
                message:
                  'United Nations General Assembly Ion the 5th n New York', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-06') {
            // Custom event on December 15
            items[strTime].push({
              name: '14 Days 3rd Quarter Monitoring and Evaluation Visits to OSSAP-SDGs Project Sites across the Six (6) geo-political zones  ',
              height: 50,
            });
            const eventDate = new Date('2023-09-06T09:00:00');
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
                  '14 Days 3rd Quarter Monitoring and Evaluation Visits to OSSAP-SDGs Project Sites across the Six (6) geo-political zones ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-18') {
            // Custom event on December 15
            items[strTime].push({
              name: '10 Days joint Monitoring of Special Intervention projects in collaboration with the Federal Ministry of Finance (Special Duties) in the Six (6) geo-political zones',
              height: 50,
            });
            const eventDate = new Date('2023-09-18T09:00:00');
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
                  '10 Days joint Monitoring of Special Intervention projects in collaboration with the Federal Ministry of Finance (Special Duties) in the Six (6) geo-political zones ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-21') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inter-Ministerial Committee on SDGs meeting @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-09-21T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'Inter-Ministerial Committee on SDGs meeting @ Abuja', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-26') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization of Corp Members during Orientation in the NYSC Camps across the country',
              height: 50,
            });
            const eventDate = new Date('2023-09-26T09:00:00');
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
                  'Sensitization of Corp Members during Orientation in the NYSC Camps across the country', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-10-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Conference on Population and Development in collaboration with the UNFPA in New York',
              height: 50,
            });
            const eventDate = new Date('2023-10-05T09:00:00');
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
                  'International Conference on Population and Development in collaboration with the UNFPA in New York', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization and awareness raising on sexual reproductive health, child protection and financial literacy in identified IDP location',
              height: 50,
            });
            const eventDate = new Date('2023-11-11T09:00:00');
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
                  'Sensitization and awareness raising on sexual reproductive health, child protection and financial literacy in identified IDP location', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'United Nations Framework Convention on Climate Change (COP 28) in Dubai (UAE)',
              height: 50,
            });
            const eventDate = new Date('2023-11-15T09:00:00');
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
                  'United Nations Framework Convention on Climate Change (COP 28) in Dubai (UAE)', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-01') {
            // Custom event on December 15
            items[strTime].push({
              name: '14 Days 4th Quarter Monitoring and Evaluation Visits to Project Sites across the Six (6) geo-political zones',
              height: 50,
            });
            const eventDate = new Date('2023-12-01T09:00:00');
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
                  '14 Days 4th Quarter Monitoring and Evaluation Visits to Project Sites across the Six (6) geo-political zones', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inter-Ministerial Committee on SDGs meeting @ Abuja',
              height: 50,
            });
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
                message: 'Inter-Ministerial Committee on SDGs meeting @ Abuja', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization of Corp Members during Orientation in the NYSC Camps across the country',
              height: 50,
            });
            const eventDate = new Date('2023-12-18T09:00:00');
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
                  'Sensitization of Corp Members during Orientation in the NYSC Camps across the country', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Retreat for Management and Senior Staff in collaboration with UNDP in Lagos / Akwa Ibom State',
              height: 50,
            });
            const eventDate = new Date('2023-12-22T09:00:00');
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
                  'Retreat for Management and Senior Staff in collaboration with UNDP in Lagos / Akwa Ibom State', // Notification message
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
              <Avatar.Text label="S" style={{backgroundColor: '#99dd7a'}} />
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

export default Senior;
