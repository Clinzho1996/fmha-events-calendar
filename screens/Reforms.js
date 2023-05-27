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

const Reforms = ({navigation}) => {
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
          if (strTime === '2023-05-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization Workshop on Innovation, Anti – corruption & Transparency from 22nd – 26th',
              height: 50,
            });
            const eventDate = new Date('2023-05-22T09:00:00');
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
                  'Sensitization Workshop on Innovation, Anti – corruption & Transparency from 22nd – 26th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization Workshop on FCSSIP25 on Team Building. From 5th - 9th',
              height: 50,
            });
            const eventDate = new Date('2023-06-05T09:00:00');
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
                  'Sensitization Workshop on FCSSIP25 on Team Building. From 5th - 9th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-07-03') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Public Sector Service Excellence from 3rd - 7th',
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
                  'Capacity Building on Public Sector Service Excellence from 3rd - 7th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-07-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Compilation and Submission of FCSSIP25 2nd Quarter (2023) template from 10th - 12th',
              height: 50,
            });
            const eventDate = new Date('2023-07-10T09:00:00');
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
                  'Compilation and Submission of FCSSIP25 2nd Quarter (2023) template from 10th - 12th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-08-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Establishment of stakeholders Service Delivery Consultative Forum on Reforms from 8th - 10th',
              height: 50,
            });
            const eventDate = new Date('2023-08-08T09:00:00');
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
                  'Establishment of stakeholders Service Delivery Consultative Forum on Reforms from 8th - 10th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Improving Organizational Performance from 4th - 8th ',
              height: 50,
            });
            const eventDate = new Date('2023-09-04T09:00:00');
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
                  'Capacity Building on Improving Organizational Performance from 4th - 8th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-10-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Celebration of 2023 Customer Service Week from 9th - 13th',
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
                  'Celebration of 2023 Customer Service Week from 9th - 13th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-10-16') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Customer Experience Management from 16th - 20th ',
              height: 50,
            });
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
                  'Capacity Building on Customer Experience Management from 16th - 20th ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-10-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Compilation and Submission of FCSSIP25 3rd Quarter (2023) template from 23rd - 25th',
              height: 50,
            });
            const eventDate = new Date('2023-10-23T09:00:00');
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
                  'Compilation and Submission of FCSSIP25 3rd Quarter (2023) template from 23rd - 25th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Service-Wide Service Exchange Programme for Servicom Officers from 6th - 10th',
              height: 50,
            });
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
                  'Service-Wide Service Exchange Programme for Servicom Officers from 6th - 10th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monitoring of SERVICOM compliance in the Departments and Agencies under the Ministry from 13th - 17th  ',
              height: 50,
            });
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
                  'Monitoring of SERVICOM compliance in the Departments and Agencies under the Ministry from 13th - 17th', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Stakeholders Service Delivery/ Consultative Forum on Reforms and the impact of NSIP on the beneficiaries from 4th - 8th  ',
              height: 50,
            });
            const eventDate = new Date('2023-12-04T09:00:00');
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
                  'Stakeholders Service Delivery/ Consultative Forum on Reforms and the impact of NSIP on the beneficiaries from 4th - 8th', // Notification message
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
              <Avatar.Text label="R" style={{backgroundColor: '#99dd7a'}} />
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

export default Reforms;
