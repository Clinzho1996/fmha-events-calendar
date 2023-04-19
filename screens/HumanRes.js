/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import PushNotification from 'react-native-push-notification';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const HumanRes = ({navigation}) => {
  const [items, setItems] = useState({});
  const now = new Date();

  useEffect(() => {
    createChannel();
  });

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'fmhadmsd-events',
      channelName: 'FMHADMSD Events',
    });
  };

  const handleNotification = item => {
    PushNotification.localNotification({
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
          if (strTime === '2023-01-12') {
            // Custom event on February
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-01-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-02-02') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-02-01T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-02-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Medical Test for all staff of the Ministry  ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Medical Test for all staff of the Ministry   ', // Notification message
              date: new Date('2023-01-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-03-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-02-28T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-03-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Health Talk for staff of the Ministry',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Health Talk for staff of the Ministry', // Notification message
              date: new Date('2023-03-09T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Annual Nationwide Verification exercise in the Headquarters and Out-station ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-1-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-1-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Workers Day celebration in collaboration with the Union on the 1st @ the Eagle Square',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-1-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-14') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Training Programmes for staff of the Ministry with the OHCSF',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-1-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-02') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-1-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Union Week celebration',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-1-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Federal Civil Service Week ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-1-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Award and Recognition with OHCSF',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-1-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Health Talk for staff of the Ministry',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-1-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Junior Staff Promotion exercise for officers on SGL. 03 – 05 in the Headquarters and Out-stations',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-1-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Senior Staff Promotion Examination for non-pool Officers on SGL. 06 – 13 in the Headquarters and Out-stations ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-1-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Senior Staff Promotion Examination for non-pool Officers on SGL. 06 – 13 in the Headquarters and Out-stations ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-1-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Senior Staff Promotion Examination for non-pool Officers on SGL. 06 – 13 in the Headquarters and Out-stations ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-1-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-03-31T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-015') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Annual Nationwide Verification exercise in the Headquarters and Out-station  ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Annual Nationwide Verification exercise in the Headquarters and Out-station ', // Notification message
              date: new Date('2023-04-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-04-30T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Workers Day celebration in collaboration with the Union on the 1st @ the Eagle Square ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Workers Day celebration in collaboration with the Union on the 1st @ the Eagle Square ', // Notification message
              date: new Date('2023-04-30T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Training Programmes for staff of the Ministry with the OHCSF ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Training Programmes for staff of the Ministry with the OHCSF', // Notification message
              date: new Date('2023-05-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-05-31T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-14') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Union Week celebration ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Union Week celebration', // Notification message
              date: new Date('2023-06-13T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Federal Civil Service Week',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Federal Civil Service Week', // Notification message
              date: new Date('2023-06-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-21') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Award and Recognition with OHCSF',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Award and Recognition with OHCSF ', // Notification message
              date: new Date('2023-6-20T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-28') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Health Talk for staff of the Ministry',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Health Talk for staff of the Ministry', // Notification message
              date: new Date('2023-06-27T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-06-30T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sports Seminar',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Sports Seminar', // Notification message
              date: new Date('2023-07-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-07-31T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-16') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Training Programme for the staff of the Ministry with the OHCSF',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Training Programme for the staff of the Ministry with the OHCSF', // Notification message
              date: new Date('2023-08-15T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-03') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Junior Staff Promotion exercise for officers on SGL. 03 – 05 in the Headquarters and Out-stations',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Junior Staff Promotion exercise for officers on SGL. 03 – 05 in the Headquarters and Out-stations', // Notification message
              date: new Date('2023-06-02T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Senior Staff Promotion Examination for non-pool Officers on SGL. 06 – 13 in the Headquarters and Out-stations',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Senior Staff Promotion Examination for non-pool Officers on SGL. 06 – 13 in the Headquarters and Out-stations', // Notification message
              date: new Date('2023-06-05T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-08-31T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Union Seminar',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Union Seminar', // Notification message
              date: new Date('2023-09-09T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Health Talk',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Health Talk', // Notification message
              date: new Date('2023-09-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-9-30T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the BPP',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the BPP', // Notification message
              date: new Date('2023-10-05T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-17') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Training Programme for the staff of the Ministry with the OHCSF  ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Training Programme for the staff of the Ministry with the OHCSF ', // Notification message
              date: new Date('2023-10-16T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-01') {
            // Custom event on December 15
            items[strTime].push({
              name: ' Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
              date: new Date('2023-10-31T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OAGF ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the BPP', // Notification message
              date: new Date('2023-11-12T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-2-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National StadiumP', // Notification message
              date: new Date('2023-11-31T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OAGF',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the BPP', // Notification message
              date: new Date('2023-12-05T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Federation of Public Service Games',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Federation of Public Service Games', // Notification message
              date: new Date('2023-12-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-17') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Training programme for staff of the Ministry with OHCSF',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Training programme for staff of the Ministry with OHCSF', // Notification message
              date: new Date('2023-12-16T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Health Talk',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Health Talk', // Notification message
              date: new Date('2023-12-18T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Awards and Recognition with OHCSF',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Awards and Recognition with OHCSF', // Notification message
              date: new Date('2023-12-22T09:00:00'), // Date and time of the notification
            });
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

export default HumanRes;
