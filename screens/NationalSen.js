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

const NationalSen = ({navigation}) => {
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
          if (strTime === '2023-05-04') {
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

export default NationalSen;
