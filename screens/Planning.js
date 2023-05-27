/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import PushNotification, {Importance} from 'react-native-push-notification';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Planning = ({navigation}) => {
  const [items, setItems] = useState({});
  const now = new Date();

  useEffect(() => {
    createChannel();
  });

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
              name: 'Development Plan Implementation Unit on the 7th @ Abuja',
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
                  'Development Plan Implementation Unit on the 7th @ Abuja', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Hosting of the Nigeria International Humanitarian Summit',
              height: 50,
            });
            const eventDate = new Date('2023-06-09T09:00:00');
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
                  'Hosting of the Nigeria International Humanitarian Summit', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Advocacy and Coordination Visits to States without Humanitarian Ministry',
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
                  'Advocacy and Coordination Visits to States without Humanitarian Ministry', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Report of the Ministerial mandate to the Central Coordinating Delivery Unit (CCDU)',
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
                  'Quarterly Report of the Ministerial mandate to the Central Coordinating Delivery Unit (CCDU)', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-17') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Baseline Studies on Policies, Programmes, and Projects of the Ministry in Six (6)  geopolitical zones',
              height: 50,
            });
            const eventDate = new Date('2023-06-17T09:00:00');
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
                  'Baseline Studies on Policies, Programmes, and Projects of the Ministry in Six (6)  geopolitical zones', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Management meetings with heads of agencies',
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
                message: 'Management meetings with heads of agencies', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-21') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Sector Monitoring of Projects for the Ministry and its Agencies',
              height: 50,
            });
            const eventDate = new Date('2023-06-21T09:00:00');
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
                  'Quarterly Sector Monitoring of Projects for the Ministry and its Agencies', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-24') {
            // Custom event on December 15
            items[strTime].push({
              name: 'MDAs Quarterly Performance Review',
              height: 50,
            });
            const eventDate = new Date('2023-06-24T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'MDAs Quarterly Performance Review', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-07-03') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Annual Statutory Bi-lateral and Multi-lateral engagement – 3rd Quarter, 2023',
              height: 50,
            });
            const eventDate = new Date('2023-07-03T09:00:00');
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
                  'Annual Statutory Bi-lateral and Multi-lateral engagement – 3rd Quarter, 2023', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-07-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production of memorandum of the Ministry and its Agencies – As the need arises',
              height: 50,
            });
            const eventDate = new Date('2023-07-07T09:00:00');
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
                  'Production of memorandum of the Ministry and its Agencies – As the need arises', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-08-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'National Council on Humanitarian Affairs ',
              height: 50,
            });
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
                message: 'National Council on Humanitarian Affairs', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-08-03') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Baseline Studies on Policies, Programmes, and Projects of the Ministry in Six (6)  geopolitical zones',
              height: 50,
            });
            const eventDate = new Date('2023-08-03T09:00:00');
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
                  'Baseline Studies on Policies, Programmes, and Projects of the Ministry in Six (6)  geopolitical zones', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-08-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Engagement with Stakeholders in the Development of short, medium, and long-term deliverables aligned with strategic pillars and thematic areas of the Roadmap ',
              height: 50,
            });
            const eventDate = new Date('2023-08-07T09:00:00');
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
                  'Engagement with Stakeholders in the Development of short, medium, and long-term deliverables aligned with strategic pillars and thematic areas of the Roadmap', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-08-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Tracking of updates for the development and population of the Unified National Social Register',
              height: 50,
            });
            const eventDate = new Date('2023-08-09T09:00:00');
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
                  'Tracking of updates for the development and population of the Unified National Social Register', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Development Plan Implementation Unit on the 6th @ Abuja',
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
                  'Development Plan Implementation Unit on the 6th @ Abuja', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Advocacy and Coordination Visits to States without Humanitarian Ministry ',
              height: 50,
            });
            const eventDate = new Date('2023-09-10T09:00:00');
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
                  'Advocacy and Coordination Visits to States without Humanitarian Ministry ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-17') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Bi-annual Policy and KPIs tracking and coordination meetings with the Ministry and Agencies ',
              height: 50,
            });
            const eventDate = new Date('2023-09-17T09:00:00');
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
                  'Bi-annual Policy and KPIs tracking and coordination meetings with the Ministry and Agencies ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Annual Conference of NGOs ',
              height: 50,
            });
            const eventDate = new Date('2023-09-19T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'Annual Conference of NGOs', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-21') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Report of the Ministerial mandate to the Central Coordinating Delivery Unit (CCDU)',
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
                message:
                  'Quarterly Report of the Ministerial mandate to the Central Coordinating Delivery Unit (CCDU)', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Management meetings with heads of agencies    ',
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
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'Management meetings with heads of agencies  ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-25') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Sector Monitoring of Projects for the Ministry and its Agencies ',
              height: 50,
            });
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
                  'Quarterly Sector Monitoring of Projects for the Ministry and its Agencies', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-28') {
            // Custom event on December 15
            items[strTime].push({
              name: 'MDAs Quarterly Performance Review ',
              height: 50,
            });
            const eventDate = new Date('2023-09-28T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'MDAs Quarterly Performance Review', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-10-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Management Retreat',
              height: 50,
            });
            const eventDate = new Date('2023-10-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'Management Retreat', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-10-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Annual Coordination meeting and target setting for NGOs',
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
                  'Annual Coordination meeting and target setting for NGOs', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-10-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Training and Workshops on Monitoring and Evaluation in collaboration with the Federal Ministry of Finance, Budget, and National Planning.',
              height: 50,
            });
            const eventDate = new Date('2023-10-09T09:00:00');
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
                  'Training and Workshops on Monitoring and Evaluation in collaboration with the Federal Ministry of Finance, Budget, and National Planning.', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-10-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production of memorandum of the Ministry and its Agencies – As the need arises ',
              height: 50,
            });
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
                  'Production of memorandum of the Ministry and its Agencies – As the need arises', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Advocacy and Coordination Visits to States without Humanitarian Ministry ',
              height: 50,
            });
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
                message:
                  'Advocacy and Coordination Visits to States without Humanitarian Ministry', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Annual Sector Performance Assessment meeting',
              height: 50,
            });
            const eventDate = new Date('2023-11-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'Annual Sector Performance Assessment meeting', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Baseline Studies on Policies, Programmes, and Projects of the Ministry in Six (6)  geopolitical zones',
              height: 50,
            });
            const eventDate = new Date('2023-11-08T09:00:00');
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
                  'Baseline Studies on Policies, Programmes, and Projects of the Ministry in Six (6)  geopolitical zones', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sector Performance Planning Retreat',
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
                message: 'Sector Performance Planning Retreat', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Development Plan Implementation Unit on the 6th @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-12-06T09:00:00');
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
                  'Development Plan Implementation Unit on the 6th @ Abuja', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Report of the Ministerial mandate to the Central Coordinating Delivery Unit (CCDU)  ',
              height: 50,
            });
            const eventDate = new Date('2023-12-08T09:00:00');
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
                  'Quarterly Report of the Ministerial mandate to the Central Coordinating Delivery Unit (CCDU) ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Management meetings with heads of agencies ',
              height: 50,
            });
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
                message: 'Management meetings with heads of agencies ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Sector Monitoring of Projects for the Ministry and its Agencies',
              height: 50,
            });
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
                  'Quarterly Sector Monitoring of Projects for the Ministry and its Agencies', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Tracking of updates for the development and population of the Unified National Social Register',
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
                  'Tracking of updates for the development and population of the Unified National Social Register', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production of memorandum of the Ministry and its Agencies – As the need arises',
              height: 50,
            });
            const eventDate = new Date('2023-12-20T09:00:00');
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
                  'Production of memorandum of the Ministry and its Agencies – As the need arises', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-25') {
            // Custom event on December 15
            items[strTime].push({
              name: 'MDAs Quarterly Performance Review',
              height: 50,
            });
            const eventDate = new Date('2023-12-25T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                importance: Importance.HIGH,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'MDAs Quarterly Performance Review', // Notification message
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

export default Planning;
