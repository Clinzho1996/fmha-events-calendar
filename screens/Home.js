/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, PermissionsAndroid} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import PushNotification from 'react-native-push-notification';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Home = () => {
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
          if (strTime === '2023-04-15') {
            // Custom event on April 15
            items[strTime].push({
              name: 'Annual BI Salary',
              height: 50,
            });
          } else if (strTime === '2023-03-31') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Closure of Capital Accounts on the 31st',
              height: 50,
            });

            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message: 'Closure of Capital Accounts on the 31st', // Notification message
              date: new Date('2023-03-30T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-03') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Budget Monitoring and Evaluation in the Six (6) geo-political zones   ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'Budget Monitoring and Evaluation in the Six (6) geo-political zones', // Notification message
              date: new Date('2023-07-02T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Budget Defense @ Abuja',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message: 'Budget Defense @ Abuja', // Notification message
              date: new Date('2023-07-12T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'IPSAS (International Public Sector Accounting  Standard Training and Workshop @ Kano',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'IPSAS (International Public Sector Accounting  Standard Training and Workshop @ Kano', // Notification message
              date: new Date('2023-08-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-18') {
            // Custom event on December 15
            items[strTime].push({
              name: '2023 Budget Preparation @ Abuja',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message: '2023 Budget Preparation @ Abuja', // Notification message
              date: new Date('2023-08-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-25') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Budget Defense @ Abuja',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message: 'Budget Defense @ Abuja', // Notification message
              date: new Date('2023-08-24T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Financial Modelling Training, reporting and revenue management',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'Financial Modelling Training, reporting and revenue management', // Notification message
              date: new Date('2023-10-09T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'ICAN Conference/ANAN MCPE @ Abuja',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message: 'ICAN Conference/ANAN MCPE @ Abuja', // Notification message
              date: new Date('2023-11-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-23') {
            // Custom event on February
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia', // Notification message
              date: new Date('2023-05-22T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-24') {
            // Custom event on December 15
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia', // Notification message
              date: new Date('2023-05-23T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-25') {
            // Custom event on December 15
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia', // Notification message
              date: new Date('2023-05-24T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-26') {
            // Custom event on December 15
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia', // Notification message
              date: new Date('2023-05-25T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-27') {
            // Custom event on December 15
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia', // Notification message
              date: new Date('2023-05-26T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-28') {
            // Custom event on December 15
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia', // Notification message
              date: new Date('2023-05-27T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Refugees Day on 20th',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message: ' World Refugees Day on 20th', // Notification message
              date: new Date('2023-06-19T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-30') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Day against Human Trafficking on the 30th',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message: 'World Day against Human Trafficking on the 30th', // Notification message
              date: new Date('2023-06-29T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Humanitarian Day on the 19th',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message: 'World Humanitarian Day on the 19th', // Notification message
              date: new Date('2023-08-18T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-30') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Day for the Disappear on the 30th',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message: 'International Day for the Disappear on the 30th', // Notification message
              date: new Date('2023-08-29T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'United Nations General Assembly in New York',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message: 'United Nations General Assembly in New York', // Notification message
              date: new Date('2023-09-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Executive Committee meeting of the United Nations High Commission on Refugees in New York ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'Executive Committee meeting of the United Nations High Commission on Refugees in New York ', // Notification message
              date: new Date('2023-09-09T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Day for Disaster Risk Reduction on the 13th ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'International Day for Disaster Risk Reduction on the 13th', // Notification message
              date: new Date('2023-10-12T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'National Migration Dialogue',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message: 'National Migration Dialogue', // Notification message
              date: new Date('2023-10-31T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'United Nations Climate Change 2023 (Cop 28)',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message: 'United Nations Climate Change 2023 (Cop 28)', // Notification message
              date: new Date('2023-11-05T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva', // Notification message
              date: new Date('2023-12-12T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-14') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva  ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva', // Notification message
              date: new Date('2023-12-13T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva', // Notification message
              date: new Date('2023-12-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-01-12') {
            // Custom event on February
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
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
              message: 'Awards and Recognition with OHCSF', // Notification message
              date: new Date('2023-12-22T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-03-01') {
            // Custom event on February
            items[strTime].push({
              name: 'Monitoring and Evaluation of projects and programmes  in collaboration with relevant Departments in the six (6) geo-political zones',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'Monitoring and Evaluation of projects and programmes  in collaboration with relevant Departments in the six (6) geo-political zones', // Notification message
              date: new Date('2023-02-28T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-03-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inspection of Federal School of Social Work in collaboration with the Social Development Department @ Emene – Enugu State',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'Inspection of Federal School of Social Work in collaboration with the Social Development Department @ Emene – Enugu State', // Notification message
              date: new Date('2023-03-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-03-16') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inspection of Braille Press and Library Centres in collaboration with the Special Needs Department in the six (6) geo-political zones  ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'Inspection of Braille Press and Library Centres in collaboration with the Special Needs Department in the six (6) geo-political zones ', // Notification message
              date: new Date('2023-03-15T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones', // Notification message
              date: new Date('2023-06-09T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inspection of Braille Press and Library Centres in collaboration with the Special Needs Department in the six (6) geo-political zones',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'Inspection of Braille Press and Library Centres in collaboration with the Special Needs Department in the six (6) geo-political zones', // Notification message
              date: new Date('2023-06-12T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Internal Auditing Training @ Lagos and katsina',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message: 'Internal Auditing Training @ Lagos and katsina', // Notification message
              date: new Date('2023-06-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'ICAN / ANAN Mandatory Continues Professional Development (MCPD) @ Bauchi and Lagos ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'ICAN / ANAN Mandatory Continues Professional Development (MCPD) @ Bauchi and Lagos', // Notification message
              date: new Date('2023-06-22T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-03') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones', // Notification message
              date: new Date('2023-09-02T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inspection of National Rehabilitation centre in collaboration with the Special Needs Department @ Abuja',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'Inspection of National Rehabilitation centre in collaboration with the Special Needs Department @ Abuja', // Notification message
              date: new Date('2023-09-09T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-14') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones', // Notification message
              date: new Date('2023-09-13T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inspection of Braille Press and Library Centres in collaboration with the Special Needs Department in the six (6) geo-political zones',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'Inspection of Braille Press and Library Centres in collaboration with the Special Needs Department in the six (6) geo-political zones', // Notification message
              date: new Date('2023-11-03T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'ICAN / ANAN Mandatory Continues Professional Development (MCPD) @ Bauchi and Lagos',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              message:
                'ICAN / ANAN Mandatory Continues Professional Development (MCPD) @ Bauchi and Lagos', // Notification message
              date: new Date('2023-12-03T09:00:00'), // Date and time of the notification
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
