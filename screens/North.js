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

const North = ({navigation}) => {
  const [items, setItems] = useState({});
  const now = new Date();

  useEffect(() => {
    createChannel();
  });

  const createChannel = () => {
    PushNotification.createChannel({
      allowWhileIdle: true,
      channelId: 'fmhadmsd-events',
      channelName: 'FMHADMSD Events',
    });
  };

  const handleNotification = item => {
    PushNotification.localNotification({
      allowWhileIdle: true,
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
          if (strTime === '2023-04-26') {
            // Custom event on February
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 26th',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 19th', // Notification message
              date: new Date('2023-12-19T09:00:00'), // Date and time of the notification
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

export default North;
