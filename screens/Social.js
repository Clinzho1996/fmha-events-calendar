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

const Social = ({navigation}) => {
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
          if (strTime === '2023-06-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Stakeholder meetings on National Counselling Strategy on the 13th @ Emene, Enugu State.',
              height: 50,
            });
            // Schedule local notification for April 15
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
                  'Stakeholder meetings on National Counselling Strategy on the 13th @ Emene, Enugu State.', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Elder Abuse Awareness Day on the 15th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
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
                  'World Elder Abuse Awareness Day on the 15th in the 36 States and F.C.T', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-07-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building of Casework Officers / Counsellors from 4th – 8th @ Keffi, Nasarawa State',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-07-04T09:00:00');
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
                  'Capacity Building of Casework Officers / Counsellors from 4th – 8th @ Keffi, Nasarawa State', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-07-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Provision of psychosocial support to identified victims lost to their families and reconciliation with their families from 18th – 22nd @ Adamawa / Gombe States',
              height: 50,
            });
            // Schedule local notification for April 15
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
                message:
                  ' Provision of psychosocial support to identified victims lost to their families and reconciliation with their families from 18th – 22nd @ Adamawa / Gombe States', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-16') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Day of African Child on the 16th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-16T09:00:00');
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
                  'Day of African Child on the 16th in the 36 States and F.C.T', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization and Awareness Creation on Sanitation and Hygiene in all the IDP camps from 20th – 21st @ Edo State',
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
                message:
                  'Sensitization and Awareness Creation on Sanitation and Hygiene in all the IDP camps from 20th – 21st @ Edo State', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Widows Day on the 23rd in the 36 States and F.C.T  ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-23T09:00:00');
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
                  'International Widows Day on the 23rd in the 36 States and F.C.T ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-25') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Matriculation Ceremony or students of Federal School of Social Work on the 25th @ Emene, Enugu State ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-25T09:00:00');
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
                  'Matriculation Ceremony or students of Federal School of Social Work on the 25th @ Emene, Enugu State ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-08-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Skill Acquisition programmes for Inmates in Nigeria Correctional Centres (Prisons) from 1st – 5th @ Kano State ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-08-01T09:00:00');
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
                  'Skill Acquisition programmes for Inmates in Nigeria Correctional Centres (Prisons) from 1st – 5th @ Kano State', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-08-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Mapping out of Destitute from 15th – 19th @ Kano State ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-08-15T09:00:00');
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
                  'Mapping out of Destitute from 15th – 19th @ Kano State', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-08-28') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Meeting of State Directors of Social Welfare and other stakeholders on define Social Protection Floors from 28th – 31st @ Yobe State ',
              height: 50,
            });
            // Schedule local notification for April 15
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
                  'Meeting of State Directors of Social Welfare and other stakeholders on define Social Protection Floors from 28th – 31st @ Yobe State  ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-08-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Youth Day on the 12th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-08-12T09:00:00');
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
                  'International Youth Day on the 12th in the 36 States and F.C.T', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Economic Empowerment / Psycho-Social Support for Women with Vesico Vaginal Fistula (VVF) from 5th – 9th @ Kano State  ',
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
                message:
                  'Economic Empowerment / Psycho-Social Support for Women with Vesico Vaginal Fistula (VVF) from 5th – 9th @ Kano State  ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Empowerment of 600 Women in the North-East for effective integration from 11th – 14th in the North-East Geo-Political Zone ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-11T09:00:00');
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
                  'Empowerment of 600 Women in the North-East for effective integration from 11th – 14th in the North-East Geo-Political Zone', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'UN General Assembly (UNGA) on the 13th @ New York',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-13T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'UN General Assembly (UNGA) on the 13th @ New York', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-14') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization and Awareness Creation on the effect of Drugs on  Youths, Women, Men and Children on the 14th @ Nasarawa and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-14T09:00:00');
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
                  'Sensitization and Awareness Creation on the effect of Drugs on  Youths, Women, Men and Children on the 14th @ Nasarawa and F.C.T', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-21') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Day for Peace and Justice on the 21st in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
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
                message:
                  'International Day for Peace and Justice on the 21st in the 36 States and F.C.T', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-25') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Medical Outreach / Welfare services for IDPs, Women and Children on 25th @ F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-25T09:00:00');
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
                  'Medical Outreach / Welfare services for IDPs, Women and Children on 25th @ F.C.T', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-10-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of aids and appliances such as walking sticks, wheel chairs, crutches (elbow & armpit) e.t.c to older persons on the 4th in the 36 States and F.C.T  ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-10-04T09:00:00');
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
                  'Distribution of aids and appliances such as walking sticks, wheel chairs, crutches (elbow & armpit) e.t.c to older persons on the 4th in the 36 States and F.C.T ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-10-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Celebration of International Day of Older Persons on the 5th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
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
                  'Celebration of International Day of Older Persons on the 5th in the 36 States and F.C.T', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-10-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Day against Drugs and Substance Abuse / illicit trafficking on the 12th @ F.C.T  ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-10-12T09:00:00');
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
                  'International Day against Drugs and Substance Abuse / illicit trafficking on the 12th @ F.C.T  ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-10-16') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Assessment visits of Social Services delivery in States from 16th – 19th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-10-16T09:00:00');
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
                  'Assessment visits of Social Services delivery in States from 16th – 19th in the 36 States and F.C.T', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-10-24') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Income generating activities for families from 24th – 28th @ Nasarawa & F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-10-24T09:00:00');
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
                  'Capacity Building on Income generating activities for families from 24th – 28th @ Nasarawa & F.C.T', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Empowerment of 600 Youths in North-West for effective integration from 6th – 9th in the North-West Geo-Political Zones',
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
                message:
                  'Empowerment of 600 Youths in North-West for effective integration from 6th – 9th in the North-West Geo-Political Zones', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Conference of Directors, Social Development / Welfare in the Federation from 13th – 15th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-11-13T09:00:00');
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
                  'Conference of Directors, Social Development / Welfare in the Federation from 13th – 15th in the 36 States and F.C.T', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Awareness creation on Nigeria (Social Work Regulatory Act 2022) from 27th – 30th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-11-27T09:00:00');
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
                  'Awareness creation on Nigeria (Social Work Regulatory Act 2022) from 27th – 30th in the 36 States and F.C.T', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Aids Day on the 1st in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
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
                message: 'World Aids Day on the 1st in the 36 States and F.C.T', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Economic Empowerment programme for Older Persons and the IDPs from 5th – 9th @ Kano, Bauchi and Katsina States',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-12-05T09:00:00');
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
                  'Economic Empowerment programme for Older Persons and the IDPs from 5th – 9th @ Kano, Bauchi and Katsina States', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Economic Empowerment Programme for Juvenile Delinquents in Borstal Homes and approved schools from 12th – 16th @ Jigawa, Gombe and Adamawa States.',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-12-12T09:00:00');
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
                  'Economic Empowerment Programme for Juvenile Delinquents in Borstal Homes and approved schools from 12th – 16th @ Jigawa, Gombe and Adamawa States.', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Economic Empowerment Programme for Destitute and street youths from 18th – 23rd @ Katsina State.',
              height: 50,
            });
            // Schedule local notification for April 15
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
                  'Economic Empowerment Programme for Destitute and street youths from 18th – 23rd @ Katsina State.', // Notification message
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

export default Social;
