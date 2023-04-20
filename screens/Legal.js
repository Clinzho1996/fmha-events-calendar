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

const Legal = ({navigation}) => {
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
          if (strTime === '2023-04-22') {
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
              <Avatar.Text label="L" style={{backgroundColor: '#99dd7a'}} />
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

export default Legal;
