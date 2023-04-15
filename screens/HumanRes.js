/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const HumanRes = ({navigation}) => {
  const [items, setItems] = useState({});
  const now = new Date();

  const loadItems = day => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          if (strTime === '2023-01-12') {
            // Custom event on February
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
          } else if (strTime === '2023-02-02') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
          } else if (strTime === '2023-03-02') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
          } else if (strTime === '2023-03-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Health Talk for staff of the Ministry',
              height: 50,
            });
          } else if (strTime === '2023-04-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
          } else if (strTime === '2023-04-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Annual Nationwide Verification exercise in the Headquarters and Out-station ',
              height: 50,
            });
          } else if (strTime === '2023-05-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium ',
              height: 50,
            });
          } else if (strTime === '2023-05-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Workers Day celebration in collaboration with the Union on the 1st @ the Eagle Square',
              height: 50,
            });
          } else if (strTime === '2023-05-14') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Training Programmes for staff of the Ministry with the OHCSF',
              height: 50,
            });
          } else if (strTime === '2023-06-02') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
          } else if (strTime === '2023-06-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Union Week celebration',
              height: 50,
            });
          } else if (strTime === '2023-06-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Federal Civil Service Week ',
              height: 50,
            });
          } else if (strTime === '2023-06-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Award and Recognition with OHCSF',
              height: 50,
            });
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Health Talk for staff of the Ministry',
              height: 50,
            });
          } else if (strTime === '2023-06-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Junior Staff Promotion exercise for officers on SGL. 03 – 05 in the Headquarters and Out-stations',
              height: 50,
            });
          } else if (strTime === '2023-06-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Senior Staff Promotion Examination for non-pool Officers on SGL. 06 – 13 in the Headquarters and Out-stations ',
              height: 50,
            });
          } else if (strTime === '2023-06-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Senior Staff Promotion Examination for non-pool Officers on SGL. 06 – 13 in the Headquarters and Out-stations ',
              height: 50,
            });
          } else if (strTime === '2023-06-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Senior Staff Promotion Examination for non-pool Officers on SGL. 06 – 13 in the Headquarters and Out-stations ',
              height: 50,
            });
          } else if (strTime === '2023-06-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Senior Staff Promotion Examination for non-pool Officers on SGL. 06 – 13 in the Headquarters and Out-stations ',
              height: 50,
            });
          } else if (strTime === '2023-06-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Senior Staff Promotion Examination for non-pool Officers on SGL. 06 – 13 in the Headquarters and Out-stations ',
              height: 50,
            });
          } else if (strTime === '2023-06-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Senior Staff Promotion Examination for non-pool Officers on SGL. 06 – 13 in the Headquarters and Out-stations ',
              height: 50,
            });
          } else if (strTime === '2023-06-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Senior Staff Promotion Examination for non-pool Officers on SGL. 06 – 13 in the Headquarters and Out-stations ',
              height: 50,
            });
          } else if (strTime === '2023-06-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Senior Staff Promotion Examination for non-pool Officers on SGL. 06 – 13 in the Headquarters and Out-stations ',
              height: 50,
            });
          } else if (strTime === '2023-06-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Senior Staff Promotion Examination for non-pool Officers on SGL. 06 – 13 in the Headquarters and Out-stations ',
              height: 50,
            });
          } else if (strTime === '2023-07-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva  ',
              height: 50,
            });
          } else if (strTime === '2023-07-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sports Seminar',
              height: 50,
            });
          } else if (strTime === '2023-08-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
          } else if (strTime === '2023-08-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Training Programme for the staff of the Ministry with the OHCSF',
              height: 50,
            });
          } else if (strTime === '2023-09-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
          } else if (strTime === '2023-09-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Union Seminar',
              height: 50,
            });
          } else if (strTime === '2023-09-16') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Health Talk',
              height: 50,
            });
          } else if (strTime === '2023-10-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
          } else if (strTime === '2023-10-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the BPP',
              height: 50,
            });
          } else if (strTime === '2023-10-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the BPP',
              height: 50,
            });
          } else if (strTime === '2023-10-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the BPP',
              height: 50,
            });
          } else if (strTime === '2023-10-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the BPP',
              height: 50,
            });
          } else if (strTime === '2023-10-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the BPP',
              height: 50,
            });
          } else if (strTime === '2023-10-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the BPP',
              height: 50,
            });
          } else if (strTime === '2023-10-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the BPP',
              height: 50,
            });
          } else if (strTime === '2023-10-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the BPP',
              height: 50,
            });
          } else if (strTime === '2023-10-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Training Programme for the staff of the Ministry with the OHCSF  ',
              height: 50,
            });
          } else if (strTime === '2023-11-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium   ',
              height: 50,
            });
          } else if (strTime === '2023-11-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OAGF',
              height: 50,
            });
          } else if (strTime === '2023-11-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OAGF',
              height: 50,
            });
          } else if (strTime === '2023-11-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OAGF',
              height: 50,
            });
          } else if (strTime === '2023-11-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OAGF',
              height: 50,
            });
          } else if (strTime === '2023-11-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OAGF',
              height: 50,
            });
          } else if (strTime === '2023-11-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OAGF',
              height: 50,
            });
          } else if (strTime === '2023-11-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OAGF',
              height: 50,
            });
          } else if (strTime === '2023-11-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OAGF',
              height: 50,
            });
          } else if (strTime === '2023-12-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
          } else if (strTime === '2023-12-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OHCSF',
              height: 50,
            });
          } else if (strTime === '2023-12-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OHCSF',
              height: 50,
            });
          } else if (strTime === '2023-12-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OHCSF',
              height: 50,
            });
          } else if (strTime === '2023-12-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OHCSF',
              height: 50,
            });
          } else if (strTime === '2023-12-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OHCSF',
              height: 50,
            });
          } else if (strTime === '2023-12-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OHCSF',
              height: 50,
            });
          } else if (strTime === '2023-12-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OHCSF',
              height: 50,
            });
          } else if (strTime === '2023-12-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OHCSF',
              height: 50,
            });
          } else if (strTime === '2023-12-16') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Federation of Public Service Games',
              height: 50,
            });
          } else if (strTime === '2023-12-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Training programme for staff of the Ministry with OHCSF ',
              height: 50,
            });
          } else if (strTime === '2023-12-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Health Talk',
              height: 50,
            });
          } else if (strTime === '2023-12-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Awards and Recognition with OHCSF',
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
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
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
              <Text style={{width: 200}}>{item.name}</Text>
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

export default HumanRes;
