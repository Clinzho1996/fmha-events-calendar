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

const Senior = ({navigation}) => {
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
          if (strTime === '2023-04-24') {
            // Custom event on February
            items[strTime].push({
              name: 'Inter-Ministerial Committee on SDGs meeting @ Abuja',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Inter-Ministerial Committee on SDGs meeting @ Abuja', // Notification message
              date: new Date('2023-04-23T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-29') {
            // Custom event on December 15
            items[strTime].push({
              name: 'FABLE Initiative @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'FABLE Initiative @ Abuja', // Notification message
              date: new Date('2023-04-28T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-09') {
            // Custom event on December 15
            items[strTime].push({
              name: '7 days Intensive Training for staff of the P,M&E Office on understanding the Principle of M&E from the 9th – 16th @ Abuja. ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                '7 days Intensive Training for staff of the P,M&E Office on understanding the Principle of M&E from the 9th – 16th @ Abuja. ', // Notification message
              date: new Date('2023-05-08T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-07') {
            // Custom event on December 15
            items[strTime].push({
              name: '14 Days 2nd Quarter Monitoring and Evaluation Visits to OSSAP-SDGs Project Sites across the Six (6) geo-political zones  ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                '14 Days 2nd Quarter Monitoring and Evaluation Visits to OSSAP-SDGs Project Sites across the Six (6) geo-political zones ', // Notification message
              date: new Date('2023-06-06T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Baseline indicators of the SDGs with the latest information after the experience of Covid-19 in collaboration with the NBS in the 36 States of the Federation and the F.C.T',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Baseline indicators of the SDGs with the latest information after the experience of Covid-19 in collaboration with the NBS in the 36 States of the Federation and the F.C.T', // Notification message
              date: new Date('2023-06-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monitoring of Capital Budget Performance in conjunction with the Budget Office of the Federation in the Six (6) geo-political zones',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Monitoring of Capital Budget Performance in conjunction with the Budget Office of the Federation in the Six (6) geo-political zones ', // Notification message
              date: new Date('2023-06-21T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-29') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization of Corp Members during Orientation in the NYSC Camps across the country',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization of Corp Members during Orientation in the NYSC Camps across the country', // Notification message
              date: new Date('2023-06-28T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inter-Ministerial Committee on SDGs meeting @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Inter-Ministerial Committee on SDGs meeting @ Abuja', // Notification message
              date: new Date('2023-07-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'United Nations General Assembly Ion the 5th n New York',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'United Nations General Assembly Ion the 5th n New York', // Notification message
              date: new Date('2023-09-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-06') {
            // Custom event on December 15
            items[strTime].push({
              name: '14 Days 3rd Quarter Monitoring and Evaluation Visits to OSSAP-SDGs Project Sites across the Six (6) geo-political zones  ',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                '14 Days 3rd Quarter Monitoring and Evaluation Visits to OSSAP-SDGs Project Sites across the Six (6) geo-political zones ', // Notification message
              date: new Date('2023-09-05T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-18') {
            // Custom event on December 15
            items[strTime].push({
              name: '10 Days joint Monitoring of Special Intervention projects in collaboration with the Federal Ministry of Finance (Special Duties) in the Six (6) geo-political zones',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                '10 Days joint Monitoring of Special Intervention projects in collaboration with the Federal Ministry of Finance (Special Duties) in the Six (6) geo-political zones ', // Notification message
              date: new Date('2023-09-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-21') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inter-Ministerial Committee on SDGs meeting @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Inter-Ministerial Committee on SDGs meeting @ Abuja', // Notification message
              date: new Date('2023-09-20T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-26') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization of Corp Members during Orientation in the NYSC Camps across the country',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization of Corp Members during Orientation in the NYSC Camps across the country', // Notification message
              date: new Date('2023-09-25T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Conference on Population and Development in collaboration with the UNFPA in New York',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'International Conference on Population and Development in collaboration with the UNFPA in New York', // Notification message
              date: new Date('2023-10-04T09:00:00'), // Date and time of the notification
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
          } else if (strTime === '2023-11-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'United Nations Framework Convention on Climate Change (COP 28) in Dubai (UAE)',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'United Nations Framework Convention on Climate Change (COP 28) in Dubai (UAE)', // Notification message
              date: new Date('2023-11-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-01') {
            // Custom event on December 15
            items[strTime].push({
              name: '14 Days 4th Quarter Monitoring and Evaluation Visits to Project Sites across the Six (6) geo-political zones',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                '14 Days 4th Quarter Monitoring and Evaluation Visits to Project Sites across the Six (6) geo-political zones', // Notification message
              date: new Date('2023-11-30T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inter-Ministerial Committee on SDGs meeting @ Abuja',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Inter-Ministerial Committee on SDGs meeting @ Abuja', // Notification message
              date: new Date('2023-12-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization of Corp Members during Orientation in the NYSC Camps across the country',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization of Corp Members during Orientation in the NYSC Camps across the country', // Notification message
              date: new Date('2023-12-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Retreat for Management and Senior Staff in collaboration with UNDP in Lagos / Akwa Ibom State',
              height: 50,
            });
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Retreat for Management and Senior Staff in collaboration with UNDP in Lagos / Akwa Ibom State', // Notification message
              date: new Date('2023-12-21T09:00:00'), // Date and time of the notification
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

export default Senior;
