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

const SpecialDuties = ({navigation}) => {
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
          if (strTime === '2023-04-28') {
            // Custom event on February
            items[strTime].push({
              name: 'Support to Persons of Concerns and Missing Persons in Conflict and crisis management scenarios @ BAY and North West States',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
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
              allowWhileIdle: true,
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Special cooperate programmes on Women empowerment and peacebuilding in fragile Zones (IDPs and Returning Communities) @ BAY States', // Notification message
              date: new Date('2023-06-18T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Survey of Victims of Terrorism (VoT)',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              allowWhileIdle: true,
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Survey of Victims of Terrorism (VoT)', // Notification message
              date: new Date('2023-11-12T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'State Actos (Federal, State & LGA’s) Coordination and liaison',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              allowWhileIdle: true,
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'State Actos (Federal, State & LGA’s) Coordination and liaison', // Notification message
              date: new Date('2023-12-10T09:00:00'), // Date and time of the notification
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
              <Avatar.Text label="S" style={{backgroundColor: '#99dd7a'}} />
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

export default SpecialDuties;
