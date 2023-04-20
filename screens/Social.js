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

const Social = ({navigation}) => {
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
          if (strTime === '2023-01-31') {
            // Custom event on February
            items[strTime].push({
              name: 'UN Economic and Social Council (ECOSOC) on the 31st @ New York',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'UN Economic and Social Council (ECOSOC) on the 31st @ New York', // Notification message
              date: new Date('2023-01-30T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-04-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization and awareness programme for Counter Terrorism Desk Officers in the North-East from 18th – 20th @ Adamawa State',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization and awareness programme for Counter Terrorism Desk Officers in the North-East from 18th – 20th @ Adamawa State', // Notification message
              date: new Date('2023-04-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-05-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Celebration of International Day of Families on the 19th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Celebration of International Day of Families on the 19th in the 36 States and F.C.T', // Notification message
              date: new Date('2023-05-18T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Stakeholder meetings on National Counselling Strategy on the 13th @ Emene, Enugu State.',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Stakeholder meetings on National Counselling Strategy on the 13th @ Emene, Enugu State.', // Notification message
              date: new Date('2023-06-12T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Elder Abuse Awareness Day on the 15th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'World Elder Abuse Awareness Day on the 15th in the 36 States and F.C.T', // Notification message
              date: new Date('2023-06-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building of Casework Officers / Counsellors from 4th – 8th @ Keffi, Nasarawa State',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Capacity Building of Casework Officers / Counsellors from 4th – 8th @ Keffi, Nasarawa State', // Notification message
              date: new Date('2023-07-03T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-07-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Provision of psychosocial support to identified victims lost to their families and reconciliation with their families from 18th – 22nd @ Adamawa / Gombe States',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                ' Provision of psychosocial support to identified victims lost to their families and reconciliation with their families from 18th – 22nd @ Adamawa / Gombe States', // Notification message
              date: new Date('2023-07-17T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-16') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Day of African Child on the 16th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Day of African Child on the 16th in the 36 States and F.C.T', // Notification message
              date: new Date('2023-06-15T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization and Awareness Creation on Sanitation and Hygiene in all the IDP camps from 20th – 21st @ Edo State',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization and Awareness Creation on Sanitation and Hygiene in all the IDP camps from 20th – 21st @ Edo State', // Notification message
              date: new Date('2023-06-19T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Widows Day on the 23rd in the 36 States and F.C.T  ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'International Widows Day on the 23rd in the 36 States and F.C.T ', // Notification message
              date: new Date('2023-06-22T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-06-25') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Matriculation Ceremony or students of Federal School of Social Work on the 25th @ Emene, Enugu State ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Matriculation Ceremony or students of Federal School of Social Work on the 25th @ Emene, Enugu State ', // Notification message
              date: new Date('2023-06-24T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Skill Acquisition programmes for Inmates in Nigeria Correctional Centres (Prisons) from 1st – 5th @ Kano State ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Skill Acquisition programmes for Inmates in Nigeria Correctional Centres (Prisons) from 1st – 5th @ Kano State', // Notification message
              date: new Date('2023-07-31T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Mapping out of Destitute from 15th – 19th @ Kano State ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'Mapping out of Destitute from 15th – 19th @ Kano State', // Notification message
              date: new Date('2023-08-14T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-28') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Meeting of State Directors of Social Welfare and other stakeholders on define Social Protection Floors from 28th – 31st @ Yobe State ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Meeting of State Directors of Social Welfare and other stakeholders on define Social Protection Floors from 28th – 31st @ Yobe State  ', // Notification message
              date: new Date('2023-08-27T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-08-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Youth Day on the 12th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'International Youth Day on the 12th in the 36 States and F.C.T', // Notification message
              date: new Date('2023-08-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Economic Empowerment / Psycho-Social Support for Women with Vesico Vaginal Fistula (VVF) from 5th – 9th @ Kano State  ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Economic Empowerment / Psycho-Social Support for Women with Vesico Vaginal Fistula (VVF) from 5th – 9th @ Kano State  ', // Notification message
              date: new Date('2023-09-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Empowerment of 600 Women in the North-East for effective integration from 11th – 14th in the North-East Geo-Political Zone ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Empowerment of 600 Women in the North-East for effective integration from 11th – 14th in the North-East Geo-Political Zone', // Notification message
              date: new Date('2023-09-10T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'UN General Assembly (UNGA) on the 13th @ New York',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'UN General Assembly (UNGA) on the 13th @ New York', // Notification message
              date: new Date('2023-09-12T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-14') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization and Awareness Creation on the effect of Drugs on  Youths, Women, Men and Children on the 14th @ Nasarawa and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Sensitization and Awareness Creation on the effect of Drugs on  Youths, Women, Men and Children on the 14th @ Nasarawa and F.C.T', // Notification message
              date: new Date('2023-09-13T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-21') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Day for Peace and Justice on the 21st in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'International Day for Peace and Justice on the 21st in the 36 States and F.C.T', // Notification message
              date: new Date('2023-09-20T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-09-25') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Medical Outreach / Welfare services for IDPs, Women and Children on 25th @ F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Medical Outreach / Welfare services for IDPs, Women and Children on 25th @ F.C.T', // Notification message
              date: new Date('2023-09-24T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of aids and appliances such as walking sticks, wheel chairs, crutches (elbow & armpit) e.t.c to older persons on the 4th in the 36 States and F.C.T  ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Distribution of aids and appliances such as walking sticks, wheel chairs, crutches (elbow & armpit) e.t.c to older persons on the 4th in the 36 States and F.C.T ', // Notification message
              date: new Date('2023-10-03T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Celebration of International Day of Older Persons on the 5th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Celebration of International Day of Older Persons on the 5th in the 36 States and F.C.T', // Notification message
              date: new Date('2023-10-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Day against Drugs and Substance Abuse / illicit trafficking on the 12th @ F.C.T  ',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'International Day against Drugs and Substance Abuse / illicit trafficking on the 12th @ F.C.T  ', // Notification message
              date: new Date('2023-10-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-16') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Assessment visits of Social Services delivery in States from 16th – 19th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Assessment visits of Social Services delivery in States from 16th – 19th in the 36 States and F.C.T', // Notification message
              date: new Date('2023-10-15T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-10-24') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Income generating activities for families from 24th – 28th @ Nasarawa & F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Capacity Building on Income generating activities for families from 24th – 28th @ Nasarawa & F.C.T', // Notification message
              date: new Date('2023-10-23T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Empowerment of 600 Youths in North-West for effective integration from 6th – 9th in the North-West Geo-Political Zones',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Empowerment of 600 Youths in North-West for effective integration from 6th – 9th in the North-West Geo-Political Zones', // Notification message
              date: new Date('2023-11-05T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Conference of Directors, Social Development / Welfare in the Federation from 13th – 15th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Conference of Directors, Social Development / Welfare in the Federation from 13th – 15th in the 36 States and F.C.T', // Notification message
              date: new Date('2023-11-12T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-11-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Awareness creation on Nigeria (Social Work Regulatory Act 2022) from 27th – 30th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Awareness creation on Nigeria (Social Work Regulatory Act 2022) from 27th – 30th in the 36 States and F.C.T', // Notification message
              date: new Date('2023-11-26T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Aids Day on the 1st in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message: 'World Aids Day on the 1st in the 36 States and F.C.T', // Notification message
              date: new Date('2023-11-31T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Economic Empowerment programme for Older Persons and the IDPs from 5th – 9th @ Kano, Bauchi and Katsina States',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Economic Empowerment programme for Older Persons and the IDPs from 5th – 9th @ Kano, Bauchi and Katsina States', // Notification message
              date: new Date('2023-12-04T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Economic Empowerment Programme for Juvenile Delinquents in Borstal Homes and approved schools from 12th – 16th @ Jigawa, Gombe and Adamawa States.',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Economic Empowerment Programme for Juvenile Delinquents in Borstal Homes and approved schools from 12th – 16th @ Jigawa, Gombe and Adamawa States.', // Notification message
              date: new Date('2023-12-11T09:00:00'), // Date and time of the notification
            });
          } else if (strTime === '2023-12-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Economic Empowerment Programme for Destitute and street youths from 18th – 23rd @ Katsina State.',
              height: 50,
            });
            // Schedule local notification for April 15
            PushNotification.localNotificationSchedule({
              channelId: 'fmhadmsd-events',
              channelName: 'FMHADMSD Events',
              message:
                'Economic Empowerment Programme for Destitute and street youths from 18th – 23rd @ Katsina State.', // Notification message
              date: new Date('2023-12-17T09:00:00'), // Date and time of the notification
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
              <Avatar.Text label="H" style={{backgroundColor: '#99dd7a'}} />
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

export default Social;
