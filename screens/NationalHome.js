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

const NationalHome = ({navigation}) => {
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
          if (strTime === '2023-04-17') {
            // Custom event on February
            items[strTime].push({
              name: 'Presentation of the NHGSFP Policy to the Federal Executive Council',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              allowWhileIdle: true,
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Presentation of the NHGSFP Policy to the Federal Executive Council', // Notification message
              date: new Date('2023-04-16T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Launching of the Farm to Kitchen Initiative in the 36 States and the F.C.T ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              allowWhileIdle: true,
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Launching of the Farm to Kitchen Initiative in the 36 States and the F.C.T', // Notification message
              date: new Date('2023-04-19T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Launching of the Alternate School  Programme (ASP) in collaboration with ITPN in the 36 States and the F.C.T ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              allowWhileIdle: true,
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Launching of the Alternate School  Programme (ASP) in collaboration with ITPN in the 36 States and the F.C.T   ', // Notification message
              date: new Date('2023-04-26T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Launching of the NHGSFP Digital ToolBox in collaboration with NBS @ F.C.T  ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              allowWhileIdle: true,
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Launching of the NHGSFP Digital ToolBox in collaboration with NBS @ F.C.T  ', // Notification message
              date: new Date('2023-05-11T09:00:00'), // Date and time of the notification
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

export default NationalHome;
