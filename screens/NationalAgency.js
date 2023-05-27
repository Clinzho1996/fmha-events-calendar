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

const NationalAgency = ({navigation}) => {
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
          if (strTime === '2023-05-15') {
            // Custom event on February
            items[strTime].push({
              name: 'Inaugural Joint Technical Working Group meeting to design the work plan for the implementation of the Nigeria-Gambia MoU to Prevent, Suppress and Punish Trafficking in Persons Especially Women and Children in collaboration with Gambia and International partners from 15th – 16th @ Abuja',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-05-15T09:00:00');
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
                  'Inaugural Joint Technical Working Group meeting to design the work plan for the implementation of the Nigeria-Gambia MoU to Prevent, Suppress and Punish Trafficking in Persons Especially Women and Children in collaboration with Gambia and International partners from 15th – 16th @ Abuja',
                date: notificationDate,
              });
            }
          } else if (strTime === '2023-06-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Inauguration of 4 State Task Forces against Human Trafficking in collaboration with IOM from 5th – 16th @ Yobe, kebbi, Sokoto and Imo States',
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
                  'Inauguration of 4 State Task Forces against Human Trafficking in collaboration with IOM from 5th – 16th @ Yobe, kebbi, Sokoto and Imo States',
                date: notificationDate,
              });
            }
          } else if (strTime === '2023-07-24') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World day Against Human Trafficking in collaboration with local and International partners from 24th – 29th @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-07-24T09:00:00');
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
                  'World day Against Human Trafficking in collaboration with local and International partners from 24th – 29th @ Abuja',
                date: notificationDate,
              });
            }
          } else if (strTime === '2023-07-31') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Launch of compendium of good practices of State Task Forces in combating human trafficking in Nigeria in collaboration with UNODC, Expertise France, IOM, FIIAPP on the 31st @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-07-31T09:00:00');
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
                  'Launch of compendium of good practices of State Task Forces in combating human trafficking in Nigeria in collaboration with UNODC, Expertise France, IOM, FIIAPP on the 31st @ Abuja',
                date: notificationDate,
              });
            }
          } else if (strTime === '2023-08-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Boot camp for members of State Task Forces on Human Trafficking in collaboration with international partners from 1st – 3rd  @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-08-01T09:00:00');
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
                  'Boot camp for members of State Task Forces on Human Trafficking in collaboration with international partners from 1st – 3rd  @ Abuja',
                date: notificationDate,
              });
            }
          } else if (strTime === '2023-11-16') {
            // Custom event on December 15
            items[strTime].push({
              name: '16 days of activism against Gender Based Violence in collaboration with local and international partners from the 16th @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-11-16T09:00:00');
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
                  '16 days of activism against Gender Based Violence in collaboration with local and international partners from the 16th @ Abuja',
                date: notificationDate,
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

export default NationalAgency;
