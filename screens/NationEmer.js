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

const NationEmer = ({navigation}) => {
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
          if (strTime === '2023-05-09') {
            // Custom event on February
            items[strTime].push({
              name: 'Sensitization of Railway Operatives on safety and security management during Emergency Situations',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              allowWhileIdle: true,
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization of Railway Operatives on safety and security management during Emergency Situations', // Notification message
              date: new Date('2023-05-08T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Convocation of Service Providers forum ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              allowWhileIdle: true,
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Convocation of Service Providers forum', // Notification message
              date: new Date('2023-06-12T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-21') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Draft review of Relief Intervention Handbook @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              allowWhileIdle: true,
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Draft review of Relief Intervention Handbook @ Abuja', // Notification message
              date: new Date('2023-06-20T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Annual Staff Training Programme @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              allowWhileIdle: true,
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Annual Staff Training Programme @ Abuja', // Notification message
              date: new Date('2023-07-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization of Railway Operatives on safety and security management during Emergency Situations @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              allowWhileIdle: true,
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization of Railway Operatives on safety and security management during Emergency Situations @ Abuja', // Notification message
              date: new Date('2023-08-21T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Flood Consultative Workshop @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Technical Retreat/experience sharing for Zonal, Territorial and Operations Office Coordinators @ Abuja @ Abuja ', // Notification message
              date: new Date('2023-12-18T09:00:00'), // Date and time of the notification
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

export default NationEmer;
