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
          } else if (strTime === '2023-01-31') {
            // Custom event on February
            items[strTime].push({
              name: 'UN Economic and Social Council (ECOSOC) on the 31st @ New York',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'UN Economic and Social Council (ECOSOC) on the 31st @ New York', // Notification message
              date: new Date('2023-01-30T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization and awareness programme for Counter Terrorism Desk Officers in the North-East from 18th – 20th @ Adamawa State',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization and awareness programme for Counter Terrorism Desk Officers in the North-East from 18th – 20th @ Adamawa State', // Notification message
              date: new Date('2023-04-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Celebration of International Day of Families on the 19th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Celebration of International Day of Families on the 19th in the 36 States and F.C.T', // Notification message
              date: new Date('2023-05-18T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Stakeholder meetings on National Counselling Strategy on the 13th @ Emene, Enugu State.',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Stakeholder meetings on National Counselling Strategy on the 13th @ Emene, Enugu State.', // Notification message
              date: new Date('2023-06-12T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Elder Abuse Awareness Day on the 15th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'World Elder Abuse Awareness Day on the 15th in the 36 States and F.C.T', // Notification message
              date: new Date('2023-06-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building of Casework Officers / Counsellors from 4th – 8th @ Keffi, Nasarawa State',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Capacity Building of Casework Officers / Counsellors from 4th – 8th @ Keffi, Nasarawa State', // Notification message
              date: new Date('2023-07-03T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Provision of psychosocial support to identified victims lost to their families and reconciliation with their families from 18th – 22nd @ Adamawa / Gombe States',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                ' Provision of psychosocial support to identified victims lost to their families and reconciliation with their families from 18th – 22nd @ Adamawa / Gombe States', // Notification message
              date: new Date('2023-07-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-16') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Day of African Child on the 16th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Day of African Child on the 16th in the 36 States and F.C.T', // Notification message
              date: new Date('2023-06-15T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization and Awareness Creation on Sanitation and Hygiene in all the IDP camps from 20th – 21st @ Edo State',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization and Awareness Creation on Sanitation and Hygiene in all the IDP camps from 20th – 21st @ Edo State', // Notification message
              date: new Date('2023-06-19T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Widows Day on the 23rd in the 36 States and F.C.T  ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'International Widows Day on the 23rd in the 36 States and F.C.T ', // Notification message
              date: new Date('2023-06-22T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-25') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Matriculation Ceremony or students of Federal School of Social Work on the 25th @ Emene, Enugu State ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Matriculation Ceremony or students of Federal School of Social Work on the 25th @ Emene, Enugu State ', // Notification message
              date: new Date('2023-06-24T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Skill Acquisition programmes for Inmates in Nigeria Correctional Centres (Prisons) from 1st – 5th @ Kano State ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Skill Acquisition programmes for Inmates in Nigeria Correctional Centres (Prisons) from 1st – 5th @ Kano State', // Notification message
              date: new Date('2023-07-31T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Mapping out of Destitute from 15th – 19th @ Kano State ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Mapping out of Destitute from 15th – 19th @ Kano State', // Notification message
              date: new Date('2023-08-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-28') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Meeting of State Directors of Social Welfare and other stakeholders on define Social Protection Floors from 28th – 31st @ Yobe State ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Meeting of State Directors of Social Welfare and other stakeholders on define Social Protection Floors from 28th – 31st @ Yobe State  ', // Notification message
              date: new Date('2023-08-27T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Youth Day on the 12th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'International Youth Day on the 12th in the 36 States and F.C.T', // Notification message
              date: new Date('2023-08-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Economic Empowerment / Psycho-Social Support for Women with Vesico Vaginal Fistula (VVF) from 5th – 9th @ Kano State  ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Economic Empowerment / Psycho-Social Support for Women with Vesico Vaginal Fistula (VVF) from 5th – 9th @ Kano State  ', // Notification message
              date: new Date('2023-09-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Empowerment of 600 Women in the North-East for effective integration from 11th – 14th in the North-East Geo-Political Zone ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Empowerment of 600 Women in the North-East for effective integration from 11th – 14th in the North-East Geo-Political Zone', // Notification message
              date: new Date('2023-09-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'UN General Assembly (UNGA) on the 13th @ New York',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'UN General Assembly (UNGA) on the 13th @ New York', // Notification message
              date: new Date('2023-09-12T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-14') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization and Awareness Creation on the effect of Drugs on  Youths, Women, Men and Children on the 14th @ Nasarawa and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization and Awareness Creation on the effect of Drugs on  Youths, Women, Men and Children on the 14th @ Nasarawa and F.C.T', // Notification message
              date: new Date('2023-09-13T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-21') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Day for Peace and Justice on the 21st in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'International Day for Peace and Justice on the 21st in the 36 States and F.C.T', // Notification message
              date: new Date('2023-09-20T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-25') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Medical Outreach / Welfare services for IDPs, Women and Children on 25th @ F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Medical Outreach / Welfare services for IDPs, Women and Children on 25th @ F.C.T', // Notification message
              date: new Date('2023-09-24T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of aids and appliances such as walking sticks, wheel chairs, crutches (elbow & armpit) e.t.c to older persons on the 4th in the 36 States and F.C.T  ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Distribution of aids and appliances such as walking sticks, wheel chairs, crutches (elbow & armpit) e.t.c to older persons on the 4th in the 36 States and F.C.T ', // Notification message
              date: new Date('2023-10-03T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Celebration of International Day of Older Persons on the 5th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Celebration of International Day of Older Persons on the 5th in the 36 States and F.C.T', // Notification message
              date: new Date('2023-10-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Day against Drugs and Substance Abuse / illicit trafficking on the 12th @ F.C.T  ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'International Day against Drugs and Substance Abuse / illicit trafficking on the 12th @ F.C.T  ', // Notification message
              date: new Date('2023-10-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-16') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Assessment visits of Social Services delivery in States from 16th – 19th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Assessment visits of Social Services delivery in States from 16th – 19th in the 36 States and F.C.T', // Notification message
              date: new Date('2023-10-15T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-24') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Income generating activities for families from 24th – 28th @ Nasarawa & F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Capacity Building on Income generating activities for families from 24th – 28th @ Nasarawa & F.C.T', // Notification message
              date: new Date('2023-10-23T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Empowerment of 600 Youths in North-West for effective integration from 6th – 9th in the North-West Geo-Political Zones',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Empowerment of 600 Youths in North-West for effective integration from 6th – 9th in the North-West Geo-Political Zones', // Notification message
              date: new Date('2023-11-05T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Conference of Directors, Social Development / Welfare in the Federation from 13th – 15th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Conference of Directors, Social Development / Welfare in the Federation from 13th – 15th in the 36 States and F.C.T', // Notification message
              date: new Date('2023-11-12T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Awareness creation on Nigeria (Social Work Regulatory Act 2022) from 27th – 30th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Awareness creation on Nigeria (Social Work Regulatory Act 2022) from 27th – 30th in the 36 States and F.C.T', // Notification message
              date: new Date('2023-11-26T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Aids Day on the 1st in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'World Aids Day on the 1st in the 36 States and F.C.T', // Notification message
              date: new Date('2023-11-31T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Economic Empowerment programme for Older Persons and the IDPs from 5th – 9th @ Kano, Bauchi and Katsina States',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Economic Empowerment programme for Older Persons and the IDPs from 5th – 9th @ Kano, Bauchi and Katsina States', // Notification message
              date: new Date('2023-12-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Economic Empowerment Programme for Juvenile Delinquents in Borstal Homes and approved schools from 12th – 16th @ Jigawa, Gombe and Adamawa States.',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Economic Empowerment Programme for Juvenile Delinquents in Borstal Homes and approved schools from 12th – 16th @ Jigawa, Gombe and Adamawa States.', // Notification message
              date: new Date('2023-12-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Economic Empowerment Programme for Destitute and street youths from 18th – 23rd @ Katsina State.',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Economic Empowerment Programme for Destitute and street youths from 18th – 23rd @ Katsina State.', // Notification message
              date: new Date('2023-12-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-10') {
            // Custom event on February
            items[strTime].push({
              name: 'Relocation to the Ministry’s permanent site @ Jabi, F.C.T Abuja',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Relocation to the Ministry’s permanent site @ Jabi, F.C.T Abuja', // Notification message
              date: new Date('2023-04-09T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-17') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Ground breaking ceremony of the Humanitarian Hub by H.E. President Muhammadu Buhari, GCFR @ the Ministry’s permanent site, Gwrimpa, Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Ground breaking ceremony of the Humanitarian Hub by H.E. President Muhammadu Buhari, GCFR @ the Ministry’s permanent site, Gwrimpa, Abuja', // Notification message
              date: new Date('2023-04-16T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Supervision of the proposed Construction of Farm to Kitchen Centre (NSIP Projects) located across the geopolitical zones  ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Supervision of the proposed Construction of Farm to Kitchen Centre (NSIP Projects) located across the geopolitical zones  ', // Notification message
              date: new Date('2023-05-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices', // Notification message
              date: new Date('2023-06-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja  ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja  ', // Notification message
              date: new Date('2023-06-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Supervision of the Design on the proposed Administrative building and lecture Halls @ the Federal School of Social Works, Emene, Enugu State ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Supervision of the Design on the proposed Administrative building and lecture Halls @ the Federal School of Social Works, Emene, Enugu State', // Notification message
              date: new Date('2023-08-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices  ', // Notification message
              date: new Date('2023-09-09T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-17') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja', // Notification message
              date: new Date('2023-09-16T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-14') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Supervision of the Design on the proposed Vocational & Life Skill (Humanitarian) Centres (NSIP Projects) located across the geopolitical zones ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Supervision of the Design on the proposed Vocational & Life Skill (Humanitarian) Centres (NSIP Projects) located across the geopolitical zones ', // Notification message
              date: new Date('2023-11-13T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Supervision of the construction and equipping ICT Centers (NSIP Projects) located @ Gwadabawa (Sokoto), Toro(Bauchi) and Ebonyi States  ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Supervision of the construction and equipping ICT Centers (NSIP Projects) located @ Gwadabawa (Sokoto), Toro(Bauchi) and Ebonyi States  ', // Notification message
              date: new Date('2023-11-19T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Supervision of the establishment of Pilot Reception Centre for Emergencies Centres (NSIP Project) located at Kirfi (Katsina) and Bama (Borno) States',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Supervision of the establishment of Pilot Reception Centre for Emergencies Centres (NSIP Project) located at Kirfi (Katsina) and Bama (Borno) States', // Notification message
              date: new Date('2023-11-26T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices', // Notification message
              date: new Date('2023-12-08T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja', // Notification message
              date: new Date('2023-12-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-23') {
            // Custom event on February
            items[strTime].push({
              name: 'Inauguration of the Procurement planning Committee @ the Ministry’s Conference Room',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Inauguration of the Procurement planning Committee @ the Ministry’s Conference Room', // Notification message
              date: new Date('2023-04-22T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Meetings on Projects to be advertised @ the Ministry’s Conference Room',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Meetings on Projects to be advertised @ the Ministry’s Conference Room', // Notification message
              date: new Date('2023-04-26T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Advertisement/Bid Solicitation in National Dailies and Federal Tender Journal ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Advertisement/Bid Solicitation in National Dailies and Federal Tender Journal  ', // Notification message
              date: new Date('2023-05-07T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Evaluation (Technical & Financial) @ the Ministry’s Conference Room',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Evaluation (Technical & Financial) @ the Ministry’s Conference Room', // Notification message
              date: new Date('2023-05-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Seeking approval for the commencement of the Ministerial Tender’s Board (MTB) for consideration of contract ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Seeking approval for the commencement of the Ministerial Tender’s Board (MTB) for consideration of contract', // Notification message
              date: new Date('2023-06-09T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'MTB meeting for consideration of contracts',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'MTB meeting for consideration of contracts', // Notification message
              date: new Date('2023-06-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Submission of the MTB Extracts for HM’s concurrence',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Submission of the MTB Extracts for HM’s concurrence', // Notification message
              date: new Date('2023-06-18T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Issuance of Contract Award Letters',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Issuance of Contract Award Letters', // Notification message
              date: new Date('2023-06-26T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-22') {
            // Custom event on February
            items[strTime].push({
              name: 'Training on Freedom of Information (FOI) Act in collaboration with the PRS Department  ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Training on Freedom of Information (FOI) Act in collaboration with the PRS Department  ', // Notification message
              date: new Date('2023-04-21T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Annual Conference of the Nigerian Bar Association (NBA) @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Annual Conference of the Nigerian Bar Association (NBA) @ Abuja', // Notification message
              date: new Date('2023-08-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Specialised Training on Alternate Dispute Resolution and Legal Writing Skills in collaboration with the Nigerian Institute of Advance Legal Studies @ Lagos State ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Specialised Training on Alternate Dispute Resolution and Legal Writing Skills in collaboration with the Nigerian Institute of Advance Legal Studies @ Lagos State ', // Notification message
              date: new Date('2023-11-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-28') {
            // Custom event on February
            items[strTime].push({
              name: 'Support to Persons of Concerns and Missing Persons in Conflict and crisis management scenarios @ BAY and North West States',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Support to Persons of Concerns and Missing Persons in Conflict and crisis management scenarios @ BAY and North West States', // Notification message
              date: new Date('2023-04-27T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Programme on Prevention and Countering Violent Extremism (PCVE)',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Meetings on Projects to be advertised @ the Ministry’s Conference Room', // Notification message
              date: new Date('2023-05-09T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-26') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Rehabilitation Programme on Drugs and Substance abuse: Rehabilitation and Psychosocial Support on the 26th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Rehabilitation Programme on Drugs and Substance abuse: Rehabilitation and Psychosocial Support on the 26th ', // Notification message
              date: new Date('2023-06-25T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-30') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Creation of Charity and Endowment Fund',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Creation of Charity and Endowment Fund', // Notification message
              date: new Date('2023-06-29T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-21') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization Lecture on Kidnapping, Hostage taking and Security Drills @ the Nigerian Army Resource Centre',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization Lecture on Kidnapping, Hostage taking and Security Drills @ the Nigerian Army Resource Centre', // Notification message
              date: new Date('2023-08-20T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Awareness on Non-State Armed Groups (NSAGs) and the Exploitation of Juveniles in Conflict situations @ Borno State',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Awareness on Non-State Armed Groups (NSAGs) and the Exploitation of Juveniles in Conflict situations @ Borno State', // Notification message
              date: new Date('2023-09-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Special cooperate programmes on Women empowerment and peacebuilding in fragile Zones (IDPs and Returning Communities) @ BAY States',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Special cooperate programmes on Women empowerment and peacebuilding in fragile Zones (IDPs and Returning Communities) @ BAY States', // Notification message
              date: new Date('2023-06-18T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-17') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Survey of Victims of Terrorism (VoT)',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Survey of Victims of Terrorism (VoT)', // Notification message
              date: new Date('2023-11-16T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'State Actos (Federal, State & LGA’s) Coordination and liaison',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'State Actos (Federal, State & LGA’s) Coordination and liaison', // Notification message
              date: new Date('2023-12-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-26') {
            // Custom event on February
            items[strTime].push({
              name: 'Press Conference for the Honourable Minister',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Press Conference for the Honourable Minister', // Notification message
              date: new Date('2023-04-25T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV', // Notification message
              date: new Date('2023-05-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Executive Media Chat between the Honourable Minister and Editors',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Executive Media Chat between the Honourable Minister and Editors', // Notification message
              date: new Date('2023-06-25T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Placement of advertisement and announcement in the media',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Placement of advertisement and announcement in the media', // Notification message
              date: new Date('2023-05-19T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV', // Notification message
              date: new Date('2023-06-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production of the Ministry’s Quarterly magazine',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Production of the Ministry’s Quarterly magazine', // Notification message
              date: new Date('2023-06-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Breakfast Forum between the Hon. Minister and the Humanitarian correspondents    ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Quarterly Breakfast Forum between the Hon. Minister and the Humanitarian correspondents ', // Notification message
              date: new Date('2023-06-18T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Training of the press/media team in social media application',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Training of the press/media team in social media application', // Notification message
              date: new Date('2023-06-26T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Press Conference for the Honourable Minister  ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Press Conference for the Honourable Minister', // Notification message
              date: new Date('2023-07-06T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV  ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV  ', // Notification message
              date: new Date('2023-07-09T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Effective messaging techniques for the Ministry and Agencies for Hon. Minister, Perm. Secretary, Directors, Chief Executive Officers of Agencies and media officers of the Ministry and its Agencies',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Effective messaging techniques for the Ministry and Agencies for Hon. Minister, Perm. Secretary, Directors, Chief Executive Officers of Agencies and media officers of the Ministry and its Agencies', // Notification message
              date: new Date('2023-07-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-25') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Hon. Minister’s facility tour of IDP/Refugee Camps, Old People’s Home, Skill Acquisition Centres and Orphanages in the six (6) geo-political zones.',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Hon. Minister’s facility tour of IDP/Refugee Camps, Old People’s Home, Skill Acquisition Centres and Orphanages in the six (6) geo-political zones.', // Notification message
              date: new Date('2023-07-24T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV', // Notification message
              date: new Date('2023-08-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Placement of advertisement and announcement in the media',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Placement of advertisement and announcement in the media', // Notification message
              date: new Date('2023-08-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV ', // Notification message
              date: new Date('2023-09-06T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production of the Ministry’s Quarterly magazine',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Production of the Ministry’s Quarterly magazine', // Notification message
              date: new Date('2023-09-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Breakfast Forum between the Hon. Minister and the Humanitarian correspondents ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Quarterly Breakfast Forum between the Hon. Minister and the Humanitarian correspondents', // Notification message
              date: new Date('2023-09-21T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV  ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV   ', // Notification message
              date: new Date('2023-10-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Placement of advertisement and announcement in the media ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Placement of advertisement and announcement in the media ', // Notification message
              date: new Date('2023-10-18T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Press Conference for the Honourable Minister ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Press Conference for the Honourable Minister', // Notification message
              date: new Date('2023-11-06T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-17') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV', // Notification message
              date: new Date('2023-11-16T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-26') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Retreat for press/media team and humanitarian correspondents in Nasarawa State',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Retreat for press/media team and humanitarian correspondents in Nasarawa State ', // Notification message
              date: new Date('2023-11-25T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Annual / End of year Ministerial Press Briefing for 2023',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Annual / End of year Ministerial Press Briefing for 2023', // Notification message
              date: new Date('2023-12-07T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV', // Notification message
              date: new Date('2023-12-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production of the Ministry’s Quarterly magazine',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Production of the Ministry’s Quarterly magazine', // Notification message
              date: new Date('2023-12-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Breakfast Forum between the Hon. Minister and the Humanitarian correspondents',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Quarterly Breakfast Forum between the Hon. Minister and the Humanitarian correspondents', // Notification message
              date: new Date('2023-12-22T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-28') {
            // Custom event on February
            items[strTime].push({
              name: 'Commissioning of Resettlement Cities',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Commissioning of Resettlement Cities', // Notification message
              date: new Date('2023-04-27T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Commissioning of Resettlement Cities',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Commissioning of Resettlement Cities', // Notification message
              date: new Date('2023-05-09T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Workers / May Day on the 1st Executive Media Chat between the Honourable Minister and Editors',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Workers / May Day on the 1st ', // Notification message
              date: new Date('2023-04-30T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sittings of the Eligibility Committee for Refugees (E.C) @ Abuja / Lagos',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sittings of the Eligibility Committee for Refugees (E.C) @ Abuja / Lagos', // Notification message
              date: new Date('2023-06-08T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Refugee Day Celebration on the 20th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'World Refugee Day Celebration on the 20th', // Notification message
              date: new Date('2023-06-19T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Medical and Health Outreach in identifies IDP locations Nationwide',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Medical and Health Outreach in identifies IDP locations Nationwide', // Notification message
              date: new Date('2023-07-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Medical and Health Outreach in identifies IDP locations Nationwide ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Medical and Health Outreach in identifies IDP locations Nationwide', // Notification message
              date: new Date('2023-08-08T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Humanitarian Day on the 19th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'World Humanitarian Day on the 19th', // Notification message
              date: new Date('2023-08-18T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sittings of the Eligibility Committee for Refugees (E.C) @ Abuja / Lagos ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sittings of the Eligibility Committee for Refugees (E.C) @ Abuja / Lagos', // Notification message
              date: new Date('2023-09-03T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Medical and Health Outreach in identifies IDP locations Nationwide',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Medical and Health Outreach in identifies IDP locations Nationwide', // Notification message
              date: new Date('2023-09-19T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Medical and Health Outreach in identifies IDP locations Nationwide',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Medical and Health Outreach in identifies IDP locations Nationwide', // Notification message
              date: new Date('2023-10-07T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-21') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization and awareness raising on sexual reproductive health, child protection and financial literacy in identified IDP location',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization and awareness raising on sexual reproductive health, child protection and financial literacy in identified IDP location', // Notification message
              date: new Date('2023-10-20T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-26') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Day for Disaster Risk Reduction ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'International Day for Disaster Risk Reduction ', // Notification message
              date: new Date('2023-10-25T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Medical and Health Outreach in identifies IDP locations Nationwide',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Medical and Health Outreach in identifies IDP locations Nationwide', // Notification message
              date: new Date('2023-11-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization and awareness raising on sexual reproductive health, child protection and financial literacy in identified IDP location',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization and awareness raising on sexual reproductive health, child protection and financial literacy in identified IDP location', // Notification message
              date: new Date('2023-11-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'National IDPs Day Refugee Appeal Board',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'National IDPs Day Refugee Appeal Board ', // Notification message
              date: new Date('2023-11-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-28') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Community Sensitization Programme on WASH, Nutrition, SGBV, Education and Psychosocial Counselling',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Community Sensitization Programme on WASH, Nutrition, SGBV, Education and Psychosocial Counselling', // Notification message
              date: new Date('2023-11-27T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sittings of the Eligibility Committee for Refugees (E.C) @ Abuja / Lagos  ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sittings of the Eligibility Committee for Refugees (E.C) @ Abuja / Lagos ', // Notification message
              date: new Date('2023-12-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Federation of Public Service Games',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Federation of Public Service Games', // Notification message
              date: new Date('2023-12-08T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Migrants Day (National Migration Dialogue) on the 18th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'International Migrants Day (National Migration Dialogue) on the 18th', // Notification message
              date: new Date('2023-12-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-09') {
            // Custom event on February
            items[strTime].push({
              name: 'Sensitization of Railway Operatives on safety and security management during Emergency Situations',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization of Railway Operatives on safety and security management during Emergency Situations', // Notification message
              date: new Date('2023-05-08T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Convocation of Service Providers forum ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Convocation of Service Providers forum', // Notification message
              date: new Date('2023-06-09T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-21') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Draft review of Relief Intervention Handbook @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Draft review of Relief Intervention Handbook @ Abuja', // Notification message
              date: new Date('2023-06-20T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Annual Staff Training Programme @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Annual Staff Training Programme @ Abuja', // Notification message
              date: new Date('2023-07-08T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization of Railway Operatives on safety and security management during Emergency Situations @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization of Railway Operatives on safety and security management during Emergency Situations @ Abuja', // Notification message
              date: new Date('2023-08-19T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Flood Consultative Workshop @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Flood Consultative Workshop @ Abuja', // Notification message
              date: new Date('2023-09-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization of Railway Operatives on safety and security management during Emergency Situations ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization of Railway Operatives on safety and security management during Emergency Situations', // Notification message
              date: new Date('2023-11-08T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Technical Retreat/experience sharing for Zonal, Territorial and Operations Office Coordinators @ Abuja @ Abuja ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Technical Retreat/experience sharing for Zonal, Territorial and Operations Office Coordinators @ Abuja @ Abuja ', // Notification message
              date: new Date('2023-12-18T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-27') {
            // Custom event on February
            items[strTime].push({
              name: 'Sensitization of Railway Operatives on safety and security management during Emergency Situations',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization of Railway Operatives on safety and security management during Emergency Situations', // Notification message
              date: new Date('2023-04-26T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'National Summit on Access to Justice for PWDs on 23rd ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'National Summit on Access to Justice for PWDs on 23rd ', // Notification message
              date: new Date('2023-05-22T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Children’s Day on the 27th ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Children’s Day on the 27th ', // Notification message
              date: new Date('2023-05-26T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Day against Child Labour on the 12th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'World Day against Child Labour on the 12th', // Notification message
              date: new Date('2023-06-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Albinism Day in collaboration with the Albinism Association of Nigeria on the 13th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Albinism Day in collaboration with the Albinism Association of Nigeria on the 13th', // Notification message
              date: new Date('2023-06-12T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Day for the Elimination of Sexual Violence in Conflict on the 19th ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'International Day for the Elimination of Sexual Violence in Conflict on the 19th ', // Notification message
              date: new Date('2023-06-18T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'National Summit on Accessibility and Launching of National Accessibility Regulation on the 23rd',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'National Summit on Accessibility and Launching of National Accessibility Regulation on the 23rd', // Notification message
              date: new Date('2023-07-22T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Week for the Deaf in collaboration with the Nigerian National Association of the Deaf from 19th – 25th ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'International Week for the Deaf in collaboration with the Nigerian National Association of the Deaf from 19th – 25th ', // Notification message
              date: new Date('2023-09-18T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'White Cane Day in collaboration with the National Association of the Blind on the 5th ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'White Cane Day in collaboration with the National Association of the Blind on the 5th', // Notification message
              date: new Date('2023-10-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-25') {
            // Custom event on December 15
            items[strTime].push({
              name: '16 Days of Activism from the 25th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: '16 Days of Activism from the 25th ', // Notification message
              date: new Date('2023-11-24T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-03') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Day for Persons with Disabilities on the 3rd',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'International Day for Persons with Disabilities on the 3rd', // Notification message
              date: new Date('2023-12-02T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-04') {
            // Custom event on February
            items[strTime].push({
              name: 'Launch of Healthy Ageing Walk For Life Program and Training Manual for Health Promotion on the 4th ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Launch of Healthy Ageing Walk For Life Program and Training Manual for Health Promotion on the 4th ', // Notification message
              date: new Date('2023-05-03T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Launch of Report on Assessment of ICOPE GAPs in Primary Health Care System on the 10th ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Launch of Report on Assessment of ICOPE GAPs in Primary Health Care System on the 10th ', // Notification message
              date: new Date('2023-05-09T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Elder Abuse Awareness Day on the 15th ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Elder Abuse Awareness Day on the 15th ', // Notification message
              date: new Date('2023-06-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Launch Of National Support Network For Older Persons – Stop Discrimination Campaign on the 22nd ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Launch Of National Support Network For Older Persons – Stop Discrimination Campaign on the 22nd ', // Notification message
              date: new Date('2023-06-21T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Launch of the National Multi-Indicator survey on Ageing – NSCC/NBS/UN DESA Fieldwork on the 1st',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Launch of the National Multi-Indicator survey on Ageing – NSCC/NBS/UN DESA Fieldwork on the 1st', // Notification message
              date: new Date('2023-06-30T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'National Workshop on Ageing Policy, Planning and Implementation for State Directors of social Welfare from 6th - 7th ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'National Workshop on Ageing Policy, Planning and Implementation for State Directors of social Welfare from 6th - 7th ', // Notification message
              date: new Date('2023-07-05T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NSCC-UN DESA 4- Day Workshop on Drafting Policy Guidelines, Care Competency Certification and Regulatory Frameworks on establishment and administration of domiciliary care and other care facilities from 1st – 4th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'NSCC-UN DESA 4- Day Workshop on Drafting Policy Guidelines, Care Competency Certification and Regulatory Frameworks on establishment and administration of domiciliary care and other care facilities from 1st – 4th', // Notification message
              date: new Date('2023-07-31T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-10') {
            // Custom event on December 15
            items[strTime].push({
              name: '2nd Edition of National Stakeholders Consultative Forum and Launch of Results Framework on the 10th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                '2nd Edition of National Stakeholders Consultative Forum and Launch of Results Framework on the 10th', // Notification message
              date: new Date('2023-08-09T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Launch of AGE-Watch Index and Sector Ranking on Age/Disability Friendliness on the 5th ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Launch of AGE-Watch Index and Sector Ranking on Age/Disability Friendliness on the 5th ', // Notification message
              date: new Date('2023-09-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'UN General Assembly on the 5th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'UN General Assembly on the 5th', // Notification message
              date: new Date('2023-09-05T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International day of Older Persons on the 1st ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'International day of Older Persons on the 1st ', // Notification message
              date: new Date('2023-09-30T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'National Day of Older Persons on the 5th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'National Day of Older Persons on the 5th', // Notification message
              date: new Date('2023-10-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Hosting Of Grey and Vintage Fair - Promoting Market For Older Persons Livelihood Ventures  in partnership with SMEDAN on the 13th ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Hosting Of Grey and Vintage Fair - Promoting Market For Older Persons Livelihood Ventures  in partnership with SMEDAN on the 13th ', // Notification message
              date: new Date('2023-11-12T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-06') {
            // Custom event on December 15
            items[strTime].push({
              name: '2nd Presidential Summit on Ageing and Awards on the 6th ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                '2nd Presidential Summit on Ageing and Awards on the 6th ', // Notification message
              date: new Date('2023-12-05T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-15') {
            // Custom event on February
            items[strTime].push({
              name: 'Inaugural Joint Technical Working Group meeting to design the work plan for the implementation of the Nigeria-Gambia MoU to Prevent, Suppress and Punish Trafficking in Persons Especially Women and Children in collaboration with Gambia and International partners from 15th – 16th @ Abuja  ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Inaugural Joint Technical Working Group meeting to design the work plan for the implementation of the Nigeria-Gambia MoU to Prevent, Suppress and Punish Trafficking in Persons Especially Women and Children in collaboration with Gambia and International partners from 15th – 16th @ Abuja  ', // Notification message
              date: new Date('2023-05-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inauguration of 4 State Task Forces against Human Trafficking in collaboration with IOM from 5th – 16th @ Yobe, kebbi, Sokoto and Imo States',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Inauguration of 4 State Task Forces against Human Trafficking in collaboration with IOM from 5th – 16th @ Yobe, kebbi, Sokoto and Imo States ', // Notification message
              date: new Date('2023-06-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-24') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World day Against Human Trafficking in collaboration with local and International partners from 24th – 29th @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'World day Against Human Trafficking in collaboration with local and International partners from 24th – 29th @ Abuja', // Notification message
              date: new Date('2023-07-23T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-31') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Launch of compendium of good practices of State Task Forces in combating human trafficking in Nigeria in collaboration with UNODC, Expertise France, IOM, FIIAPP on the 31st @ Abuja   ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Launch of compendium of good practices of State Task Forces in combating human trafficking in Nigeria in collaboration with UNODC, Expertise France, IOM, FIIAPP on the 31st @ Abuja  ', // Notification message
              date: new Date('2023-07-30T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Boot camp for members of State Task Forces on Human Trafficking in collaboration with international partners from 1st – 3rd  @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Boot camp for members of State Task Forces on Human Trafficking in collaboration with international partners from 1st – 3rd  @ Abuja', // Notification message
              date: new Date('2023-07-31T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-16') {
            // Custom event on December 15
            items[strTime].push({
              name: '16 days of activism against Gender Based Violence in collaboration with local and international partners from the 16th @ Abuja ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                '16 days of activism against Gender Based Violence in collaboration with local and international partners from the 16th @ Abuja ', // Notification message
              date: new Date('2023-11-15T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-26') {
            // Custom event on February
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 26th',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 26th', // Notification message
              date: new Date('2023-04-25T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NEDC Seminar on the 1st ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'NEDC Seminar on the 1st ', // Notification message
              date: new Date('2023-04-30T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of NEDC Mass Housing Units on the 4th @ Bauchi ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Handover of NEDC Mass Housing Units on the 4th @ Bauchi ', // Notification message
              date: new Date('2023-05-03T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Ground-Breaking for Ngom-Zabarmari-Gongulong-Kajari Phase I &II on the 8th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Ground-Breaking for Ngom-Zabarmari-Gongulong-Kajari Phase I &II on the 8th', // Notification message
              date: new Date('2023-05-07T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of Rapid Response Intervention (RRI) Projects in Borno on the 22nd',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Handover of Rapid Response Intervention (RRI) Projects in Borno on the 22nd', // Notification message
              date: new Date('2023-05-21T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-31') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 31st',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 31st', // Notification message
              date: new Date('2023-05-30T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-02') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization on drug abuse on the 2nd',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Sensitization on drug abuse on the 2nd', // Notification message
              date: new Date('2023-06-01T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of NEDC Mass Housing Units on the 5th @ Gombe',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Handover of NEDC Mass Housing Units on the 5th @ Gombe', // Notification message
              date: new Date('2023-06-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of Rapid Response Intervention (RRI) Projects on the 19th @ Bauchi State',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Handover of Rapid Response Intervention (RRI) Projects on the 19th @ Bauchi State', // Notification message
              date: new Date('2023-06-18T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-28') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 28th ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 28th', // Notification message
              date: new Date('2023-06-27T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of NEDC Mass Housing Units on the 4th @ Gombe',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Handover of NEDC Mass Housing Units on the 4th @ Gombe', // Notification message
              date: new Date('2023-07-03T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Tree planting day (one house one tree) on the 12th ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Tree planting day (one house one tree) on the 12th ', // Notification message
              date: new Date('2023-07-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of Rapid Response Intervention (RRI) Projects on the 20th @ Adamawa',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Handover of Rapid Response Intervention (RRI) Projects on the 20th @ Adamawa', // Notification message
              date: new Date('2023-07-19T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 27th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 27th', // Notification message
              date: new Date('2023-07-26T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Humanitarian Day on the 19th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'World Humanitarian Day on the 19th', // Notification message
              date: new Date('2023-08-18T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of Mega Schools in Biu and Dikwa, Borno State on the 22nd ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Handover of Mega Schools in Biu and Dikwa, Borno State on the 22nd ', // Notification message
              date: new Date('2023-08-21T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-28') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Rehabilitation and Reconstruction of Tertiary and Health Institutions on the 28th ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Rehabilitation and Reconstruction of Tertiary and Health Institutions on the 28th ', // Notification message
              date: new Date('2023-08-27T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-31') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 31st',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 31st', // Notification message
              date: new Date('2023-08-30T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of Rapid Response Intervention (RRI) Projects on the 4th @  Taraba State ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Handover of Rapid Response Intervention (RRI) Projects on the 4th @  Taraba State ', // Notification message
              date: new Date('2023-09-03T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 20th ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 20th', // Notification message
              date: new Date('2023-09-19T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization on girl child on the 5th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Sensitization on girl child on the 5th', // Notification message
              date: new Date('2023-10-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Rehabilitation and Reconstruction of Tertiary and Health Institutions on the 18th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Rehabilitation and Reconstruction of Tertiary and Health Institutions on the 18th', // Notification message
              date: new Date('2023-10-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-31') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 31st ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 31st ', // Notification message
              date: new Date('2023-10-31T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-02') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of NEDC Mass Housing Units on the 2nd @ Taraba ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Handover of NEDC Mass Housing Units on the 2nd @ Taraba', // Notification message
              date: new Date('2023-11-01T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NEDC Seminar on the 7th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'NEDC Seminar on the 7th', // Notification message
              date: new Date('2023-11-06T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NEDC Games week on the 20th ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'NEDC Games week on the 20th ', // Notification message
              date: new Date('2023-11-19T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-29') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 29th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 29th', // Notification message
              date: new Date('2023-11-28T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Education & Skills acquisition on people with disability (PWD) on the 10th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Education & Skills acquisition on people with disability (PWD) on the 10th ', // Notification message
              date: new Date('2023-12-09T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-14') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NEDC end of year media parley on the 14th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'NEDC end of year media parley on the 14th', // Notification message
              date: new Date('2023-12-13T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 19th',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 19th', // Notification message
              date: new Date('2023-12-19T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-24') {
            // Custom event on February
            items[strTime].push({
              name: 'Inter-Ministerial Committee on SDGs meeting @ Abuja',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Inter-Ministerial Committee on SDGs meeting @ Abuja', // Notification message
              date: new Date('2023-04-23T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-29') {
            // Custom event on December 15
            items[strTime].push({
              name: 'FABLE Initiative @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'FABLE Initiative @ Abuja', // Notification message
              date: new Date('2023-04-28T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-09') {
            // Custom event on December 15
            items[strTime].push({
              name: '7 days Intensive Training for staff of the P,M&E Office on understanding the Principle of M&E from the 9th – 16th @ Abuja. ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                '7 days Intensive Training for staff of the P,M&E Office on understanding the Principle of M&E from the 9th – 16th @ Abuja. ', // Notification message
              date: new Date('2023-05-08T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-07') {
            // Custom event on December 15
            items[strTime].push({
              name: '14 Days 2nd Quarter Monitoring and Evaluation Visits to OSSAP-SDGs Project Sites across the Six (6) geo-political zones  ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                '14 Days 2nd Quarter Monitoring and Evaluation Visits to OSSAP-SDGs Project Sites across the Six (6) geo-political zones ', // Notification message
              date: new Date('2023-06-06T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Baseline indicators of the SDGs with the latest information after the experience of Covid-19 in collaboration with the NBS in the 36 States of the Federation and the F.C.T',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Baseline indicators of the SDGs with the latest information after the experience of Covid-19 in collaboration with the NBS in the 36 States of the Federation and the F.C.T', // Notification message
              date: new Date('2023-06-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monitoring of Capital Budget Performance in conjunction with the Budget Office of the Federation in the Six (6) geo-political zones',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monitoring of Capital Budget Performance in conjunction with the Budget Office of the Federation in the Six (6) geo-political zones ', // Notification message
              date: new Date('2023-06-21T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-29') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization of Corp Members during Orientation in the NYSC Camps across the country',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization of Corp Members during Orientation in the NYSC Camps across the country', // Notification message
              date: new Date('2023-06-28T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inter-Ministerial Committee on SDGs meeting @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Inter-Ministerial Committee on SDGs meeting @ Abuja', // Notification message
              date: new Date('2023-07-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'United Nations General Assembly Ion the 5th n New York',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'United Nations General Assembly Ion the 5th n New York', // Notification message
              date: new Date('2023-09-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-06') {
            // Custom event on December 15
            items[strTime].push({
              name: '14 Days 3rd Quarter Monitoring and Evaluation Visits to OSSAP-SDGs Project Sites across the Six (6) geo-political zones  ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                '14 Days 3rd Quarter Monitoring and Evaluation Visits to OSSAP-SDGs Project Sites across the Six (6) geo-political zones ', // Notification message
              date: new Date('2023-09-05T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-18') {
            // Custom event on December 15
            items[strTime].push({
              name: '10 Days joint Monitoring of Special Intervention projects in collaboration with the Federal Ministry of Finance (Special Duties) in the Six (6) geo-political zones',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                '10 Days joint Monitoring of Special Intervention projects in collaboration with the Federal Ministry of Finance (Special Duties) in the Six (6) geo-political zones ', // Notification message
              date: new Date('2023-09-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-21') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inter-Ministerial Committee on SDGs meeting @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Inter-Ministerial Committee on SDGs meeting @ Abuja', // Notification message
              date: new Date('2023-09-20T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-26') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization of Corp Members during Orientation in the NYSC Camps across the country',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization of Corp Members during Orientation in the NYSC Camps across the country', // Notification message
              date: new Date('2023-09-25T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Conference on Population and Development in collaboration with the UNFPA in New York',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'International Conference on Population and Development in collaboration with the UNFPA in New York', // Notification message
              date: new Date('2023-10-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization and awareness raising on sexual reproductive health, child protection and financial literacy in identified IDP location',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization and awareness raising on sexual reproductive health, child protection and financial literacy in identified IDP location', // Notification message
              date: new Date('2023-11-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'United Nations Framework Convention on Climate Change (COP 28) in Dubai (UAE)',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'United Nations Framework Convention on Climate Change (COP 28) in Dubai (UAE)', // Notification message
              date: new Date('2023-11-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-01') {
            // Custom event on December 15
            items[strTime].push({
              name: '14 Days 4th Quarter Monitoring and Evaluation Visits to Project Sites across the Six (6) geo-political zones',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                '14 Days 4th Quarter Monitoring and Evaluation Visits to Project Sites across the Six (6) geo-political zones', // Notification message
              date: new Date('2023-11-30T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inter-Ministerial Committee on SDGs meeting @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Inter-Ministerial Committee on SDGs meeting @ Abuja', // Notification message
              date: new Date('2023-12-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization of Corp Members during Orientation in the NYSC Camps across the country',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization of Corp Members during Orientation in the NYSC Camps across the country', // Notification message
              date: new Date('2023-12-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Retreat for Management and Senior Staff in collaboration with UNDP in Lagos / Akwa Ibom State',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Retreat for Management and Senior Staff in collaboration with UNDP in Lagos / Akwa Ibom State', // Notification message
              date: new Date('2023-12-21T09:00:00'), // Date and time of the notification
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
