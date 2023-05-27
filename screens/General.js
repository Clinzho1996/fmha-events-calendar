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

const General = ({navigation}) => {
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
          if (strTime === '2023-04-10') {
            // Custom event on February
            items[strTime].push({
              name: 'Relocation to the Ministry’s permanent site @ Jabi, F.C.T Abuja',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-04-10T09:00:00');
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
                  'Relocation to the Ministry’s permanent site @ Jabi, F.C.T Abuja', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-04-17') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Ground breaking ceremony of the Humanitarian Hub by H.E. President Muhammadu Buhari, GCFR @ the Ministry’s permanent site, Gwrimpa, Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-04-17T09:00:00');
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
                  'Ground breaking ceremony of the Humanitarian Hub by H.E. President Muhammadu Buhari, GCFR @ the Ministry’s permanent site, Gwrimpa, Abuja', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-05-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Supervision of the proposed Construction of Farm to Kitchen Centre (NSIP Projects) located across the geopolitical zones  ',
              height: 50,
            });

            const eventDate = new Date('2023-05-18T09:00:00');
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
                  'Supervision of the proposed Construction of Farm to Kitchen Centre (NSIP Projects) located across the geopolitical zones  ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices',
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
                  'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-06-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja  ',
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
                message:
                  'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja  ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-08-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Supervision of the Design on the proposed Administrative building and lecture Halls @ the Federal School of Social Works, Emene, Enugu State ',
              height: 50,
            });
            const eventDate = new Date('2023-08-14T09:00:00');
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
                  'Supervision of the Design on the proposed Administrative building and lecture Halls @ the Federal School of Social Works, Emene, Enugu State', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices',
              height: 50,
            });
            const eventDate = new Date('2023-09-11T09:00:00');
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
                  'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices  ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-09-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-09-18T09:00:00');
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
                  'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-14') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Supervision of the Design on the proposed Vocational & Life Skill (Humanitarian) Centres (NSIP Projects) located across the geopolitical zones ',
              height: 50,
            });

            const eventDate = new Date('2023-11-14T09:00:00');
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
                  'Supervision of the Design on the proposed Vocational & Life Skill (Humanitarian) Centres (NSIP Projects) located across the geopolitical zones ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Supervision of the construction and equipping ICT Centers (NSIP Projects) located @ Gwadabawa (Sokoto), Toro(Bauchi) and Ebonyi States  ',
              height: 50,
            });
            const eventDate = new Date('2023-11-19T09:00:00');
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
                  'Supervision of the construction and equipping ICT Centers (NSIP Projects) located @ Gwadabawa (Sokoto), Toro(Bauchi) and Ebonyi States  ', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-11-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Supervision of the establishment of Pilot Reception Centre for Emergencies Centres (NSIP Project) located at Kirfi (Katsina) and Bama (Borno) States',
              height: 50,
            });
            const eventDate = new Date('2023-11-27T09:00:00');
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
                  'Supervision of the establishment of Pilot Reception Centre for Emergencies Centres (NSIP Project) located at Kirfi (Katsina) and Bama (Borno) States', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices ',
              height: 50,
            });
            const eventDate = new Date('2023-12-11T09:00:00');
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
                  'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices', // Notification message
                date: notificationDate, // Date and time of the notification
              });
            }
          } else if (strTime === '2023-12-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja',
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
                message:
                  'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja', // Notification message
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
              <Avatar.Text label="G" style={{backgroundColor: '#99dd7a'}} />
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

export default General;
