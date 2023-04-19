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

const Reforms = ({navigation}) => {
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
          if (strTime === '2023-04-03') {
            // Custom event on February
            items[strTime].push({
              name: 'Capacity Building on Service Charter Performance Monitoring & Reporting from 3rd - 7th',
              height: 50,
            });
          } else if (strTime === '2023-04-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Service Charter Performance Monitoring & Reporting from 3rd - 7th',
              height: 50,
            });
          } else if (strTime === '2023-04-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Service Charter Performance Monitoring & Reporting from 3rd - 7th',
              height: 50,
            });
          } else if (strTime === '2023-04-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Service Charter Performance Monitoring & Reporting from 3rd - 7th',
              height: 50,
            });
          } else if (strTime === '2023-04-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Service Charter Performance Monitoring & Reporting from 3rd - 7th',
              height: 50,
            });
          } else if (strTime === '2023-04-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Compilation and Submission of FCSSIP25 1st Quarter (2023) template from 10th - 12th',
              height: 50,
            });
          } else if (strTime === '2023-04-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Compilation and Submission of FCSSIP25 1st Quarter (2023) template from 10th - 12th',
              height: 50,
            });
          } else if (strTime === '2023-04-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Compilation and Submission of FCSSIP25 1st Quarter (2023) template from 10th - 12th',
              height: 50,
            });
          } else if (strTime === '2023-04-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Reward and Recognition of staff award on the 20th ',
              height: 50,
            });
          } else if (strTime === '2023-04-26') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Launching of the second edition of the Service Charter for the Ministry and the clusters under the NSIP on the 26th',
              height: 50,
            });
          } else if (strTime === '2023-05-02') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Commencement of 2023 Humanitarian Innovation Challenge from 2nd - 12th',
              height: 50,
            });
          } else if (strTime === '2023-05-03') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Commencement of 2023 Humanitarian Innovation Challenge from 2nd - 12th',
              height: 50,
            });
          } else if (strTime === '2023-05-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Commencement of 2023 Humanitarian Innovation Challenge from 2nd - 12th',
              height: 50,
            });
          } else if (strTime === '2023-05-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Commencement of 2023 Humanitarian Innovation Challenge from 2nd - 12th',
              height: 50,
            });
          } else if (strTime === '2023-05-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Commencement of 2023 Humanitarian Innovation Challenge from 2nd - 12th',
              height: 50,
            });
          } else if (strTime === '2023-05-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Commencement of 2023 Humanitarian Innovation Challenge from 2nd - 12th',
              height: 50,
            });
          } else if (strTime === '2023-05-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Commencement of 2023 Humanitarian Innovation Challenge from 2nd - 12th',
              height: 50,
            });
          } else if (strTime === '2023-05-02') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Commencement of 2023 Humanitarian Innovation Challenge from 2nd - 12th',
              height: 50,
            });
          } else if (strTime === '2023-05-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Commencement of 2023 Humanitarian Innovation Challenge from 2nd - 12th',
              height: 50,
            });
          } else if (strTime === '2023-05-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Commencement of 2023 Humanitarian Innovation Challenge from 2nd - 12th',
              height: 50,
            });
          } else if (strTime === '2023-05-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Commencement of 2023 Humanitarian Innovation Challenge from 2nd - 12th',
              height: 50,
            });
          } else if (strTime === '2023-05-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Commencement of 2023 Humanitarian Innovation Challenge from 2nd - 12th',
              height: 50,
            });
          } else if (strTime === '2023-05-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Opening Competition on memorization of FCSSIP25 and its enablers from 15th – 17th ',
              height: 50,
            });
          } else if (strTime === '2023-05-16') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Opening Competition on memorization of FCSSIP25 and its enablers from 15th – 17th ',
              height: 50,
            });
          } else if (strTime === '2023-05-17') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Opening Competition on memorization of FCSSIP25 and its enablers from 15th – 17th ',
              height: 50,
            });
          } else if (strTime === '2023-05-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization Workshop on Innovation, Anti – corruption & Transparency from 22nd – 26th',
              height: 50,
            });
          } else if (strTime === '2023-05-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization Workshop on Innovation, Anti – corruption & Transparency from 22nd – 26th',
              height: 50,
            });
          } else if (strTime === '2023-05-24') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization Workshop on Innovation, Anti – corruption & Transparency from 22nd – 26th',
              height: 50,
            });
          } else if (strTime === '2023-05-25') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization Workshop on Innovation, Anti – corruption & Transparency from 22nd – 26th',
              height: 50,
            });
          } else if (strTime === '2023-05-26') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization Workshop on Innovation, Anti – corruption & Transparency from 22nd – 26th',
              height: 50,
            });
          } else if (strTime === '2023-06-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization Workshop on FCSSIP25 on Team Building. From 5th - 9th',
              height: 50,
            });
          } else if (strTime === '2023-06-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization Workshop on FCSSIP25 on Team Building. From 5th - 9th',
              height: 50,
            });
          } else if (strTime === '2023-06-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization Workshop on FCSSIP25 on Team Building. From 5th - 9th',
              height: 50,
            });
          } else if (strTime === '2023-06-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization Workshop on FCSSIP25 on Team Building. From 5th - 9th',
              height: 50,
            });
          } else if (strTime === '2023-06-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization Workshop on FCSSIP25 on Team Building. From 5th - 9th',
              height: 50,
            });
          } else if (strTime === '2023-07-03') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Public Sector Service Excellence from 3rd - 7th',
              height: 50,
            });
          } else if (strTime === '2023-07-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Public Sector Service Excellence from 3rd - 7th',
              height: 50,
            });
          } else if (strTime === '2023-07-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Public Sector Service Excellence from 3rd - 7th',
              height: 50,
            });
          } else if (strTime === '2023-07-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Public Sector Service Excellence from 3rd - 7th',
              height: 50,
            });
          } else if (strTime === '2023-07-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Public Sector Service Excellence from 3rd - 7th',
              height: 50,
            });
          } else if (strTime === '2023-07-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Compilation and Submission of FCSSIP25 2nd Quarter (2023) template from 10th - 12th',
              height: 50,
            });
          } else if (strTime === '2023-07-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Compilation and Submission of FCSSIP25 2nd Quarter (2023) template from 10th - 12th',
              height: 50,
            });
          } else if (strTime === '2023-07-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Compilation and Submission of FCSSIP25 2nd Quarter (2023) template from 10th - 12th',
              height: 50,
            });
          } else if (strTime === '2023-08-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Establishment of stakeholders Service Delivery Consultative Forum on Reforms from 8th - 10th',
              height: 50,
            });
          } else if (strTime === '2023-08-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Establishment of stakeholders Service Delivery Consultative Forum on Reforms from 8th - 10th',
              height: 50,
            });
          } else if (strTime === '2023-08-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Establishment of stakeholders Service Delivery Consultative Forum on Reforms from 8th - 10th',
              height: 50,
            });
          } else if (strTime === '2023-09-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Improving Organizational Performance from 4th - 8th ',
              height: 50,
            });
          } else if (strTime === '2023-09-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Improving Organizational Performance from 4th - 8th ',
              height: 50,
            });
          } else if (strTime === '2023-09-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Improving Organizational Performance from 4th - 8th ',
              height: 50,
            });
          } else if (strTime === '2023-09-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Improving Organizational Performance from 4th - 8th ',
              height: 50,
            });
          } else if (strTime === '2023-09-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Improving Organizational Performance from 4th - 8th ',
              height: 50,
            });
          } else if (strTime === '2023-10-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Celebration of 2023 Customer Service Week from 9th - 13th',
              height: 50,
            });
          } else if (strTime === '2023-10-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Celebration of 2023 Customer Service Week from 9th - 13th',
              height: 50,
            });
          } else if (strTime === '2023-10-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Celebration of 2023 Customer Service Week from 9th - 13th',
              height: 50,
            });
          } else if (strTime === '2023-10-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Celebration of 2023 Customer Service Week from 9th - 13th',
              height: 50,
            });
          } else if (strTime === '2023-10-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Celebration of 2023 Customer Service Week from 9th - 13th',
              height: 50,
            });
          } else if (strTime === '2023-10-16') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Customer Experience Management from 16th - 20th ',
              height: 50,
            });
          } else if (strTime === '2023-10-17') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Customer Experience Management from 16th - 20th ',
              height: 50,
            });
          } else if (strTime === '2023-10-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Customer Experience Management from 16th - 20th ',
              height: 50,
            });
          } else if (strTime === '2023-10-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Customer Experience Management from 16th - 20th ',
              height: 50,
            });
          } else if (strTime === '2023-10-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Capacity Building on Customer Experience Management from 16th - 20th ',
              height: 50,
            });
          } else if (strTime === '2023-10-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Compilation and Submission of FCSSIP25 3rd Quarter (2023) template from 23rd - 25th',
              height: 50,
            });
          } else if (strTime === '2023-10-24') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Compilation and Submission of FCSSIP25 3rd Quarter (2023) template from 23rd - 25th',
              height: 50,
            });
          } else if (strTime === '2023-10-25') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Compilation and Submission of FCSSIP25 3rd Quarter (2023) template from 23rd - 25th',
              height: 50,
            });
          } else if (strTime === '2023-11-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Service-Wide Service Exchange Programme for Servicom Officers from 6th - 10th',
              height: 50,
            });
          } else if (strTime === '2023-11-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Service-Wide Service Exchange Programme for Servicom Officers from 6th - 10th',
              height: 50,
            });
          } else if (strTime === '2023-11-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Service-Wide Service Exchange Programme for Servicom Officers from 6th - 10th',
              height: 50,
            });
          } else if (strTime === '2023-11-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Service-Wide Service Exchange Programme for Servicom Officers from 6th - 10th',
              height: 50,
            });
          } else if (strTime === '2023-11-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Service-Wide Service Exchange Programme for Servicom Officers from 6th - 10th',
              height: 50,
            });
          } else if (strTime === '2023-11-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monitoring of SERVICOM compliance in the Departments and Agencies under the Ministry from 13th - 17th  ',
              height: 50,
            });
          } else if (strTime === '2023-11-14') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monitoring of SERVICOM compliance in the Departments and Agencies under the Ministry from 13th - 17th  ',
              height: 50,
            });
          } else if (strTime === '2023-11-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monitoring of SERVICOM compliance in the Departments and Agencies under the Ministry from 13th - 17th  ',
              height: 50,
            });
          } else if (strTime === '2023-11-16') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monitoring of SERVICOM compliance in the Departments and Agencies under the Ministry from 13th - 17th  ',
              height: 50,
            });
          } else if (strTime === '2023-11-17') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monitoring of SERVICOM compliance in the Departments and Agencies under the Ministry from 13th - 17th  ',
              height: 50,
            });
          } else if (strTime === '2023-12-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Stakeholders Service Delivery/ Consultative Forum on Reforms and the impact of NSIP on the beneficiaries from 4th - 8th  ',
              height: 50,
            });
          } else if (strTime === '2023-12-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Stakeholders Service Delivery/ Consultative Forum on Reforms and the impact of NSIP on the beneficiaries from 4th - 8th  ',
              height: 50,
            });
          } else if (strTime === '2023-12-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Stakeholders Service Delivery/ Consultative Forum on Reforms and the impact of NSIP on the beneficiaries from 4th - 8th  ',
              height: 50,
            });
          } else if (strTime === '2023-12-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Stakeholders Service Delivery/ Consultative Forum on Reforms and the impact of NSIP on the beneficiaries from 4th - 8th  ',
              height: 50,
            });
          } else if (strTime === '2023-12-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Stakeholders Service Delivery/ Consultative Forum on Reforms and the impact of NSIP on the beneficiaries from 4th - 8th  ',
              height: 50,
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
