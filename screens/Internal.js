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

const Internal = ({navigation}) => {
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
          if (strTime === '2023-03-01') {
            // Custom event on February
            items[strTime].push({
              name: 'Monitoring and Evaluation of projects and programmes  in collaboration with relevant Departments in the six (6) geo-political zones',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-03-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'Monitoring and Evaluation of projects and programmes  in collaboration with relevant Departments in the six (6) geo-political zones', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-03-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inspection of Federal School of Social Work in collaboration with the Social Development Department @ Emene – Enugu State',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-03-12T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'Inspection of Federal School of Social Work in collaboration with the Social Development Department @ Emene – Enugu State', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-03-16') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inspection of Braille Press and Library Centres in collaboration with the Special Needs Department in the six (6) geo-political zones  ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-03-16T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'Inspection of Braille Press and Library Centres in collaboration with the Special Needs Department in the six (6) geo-political zones ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-10T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inspection of Braille Press and Library Centres in collaboration with the Special Needs Department in the six (6) geo-political zones',
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
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'Inspection of Braille Press and Library Centres in collaboration with the Special Needs Department in the six (6) geo-political zones', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Internal Auditing Training @ Lagos and katsina',
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
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'Internal Auditing Training @ Lagos and katsina', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'ICAN / ANAN Mandatory Continues Professional Development (MCPD) @ Bauchi and Lagos ',
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
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'ICAN / ANAN Mandatory Continues Professional Development (MCPD) @ Bauchi and Lagos', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-03') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-03T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inspection of National Rehabilitation centre in collaboration with the Special Needs Department @ Abuja',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-10T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'Inspection of National Rehabilitation centre in collaboration with the Special Needs Department @ Abuja', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-25') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Internal Auditing Training @ Lagos and katsina',
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
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message: 'Internal Auditing Training @ Lagos and katsina', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inspection of Braille Press and Library Centres in collaboration with the Special Needs Department in the six (6) geo-political zones',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-11-04T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'Inspection of Braille Press and Library Centres in collaboration with the Special Needs Department in the six (6) geo-political zones', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-11-22T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'ICAN / ANAN Mandatory Continues Professional Development (MCPD) @ Bauchi and Lagos',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-12-04T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              PushNotification.localNotificationSchedule({
                allowWhileIdle: true,
                channelId: 'fmhadmsd-events',
                channelName: 'FMHADMSD Events',
                message:
                  'ICAN / ANAN Mandatory Continues Professional Development (MCPD) @ Bauchi and Lagos', // Notification message
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
              <Avatar.Text label="I" style={{backgroundColor: '#99dd7a'}} />
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

export default Internal;
