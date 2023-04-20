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

const NationalCom = ({navigation}) => {
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
          if (strTime === '2023-04-28') {
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

export default NationalCom;
