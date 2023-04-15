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

const Humanitarian = ({navigation}) => {
  const [items, setItems] = useState({});
  const now = new Date();

  const loadItems = day => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          if (strTime === '2023-05-23') {
            // Custom event on February
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
          } else if (strTime === '2023-05-24') {
            // Custom event on December 15
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
          } else if (strTime === '2023-05-25') {
            // Custom event on December 15
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
          } else if (strTime === '2023-05-26') {
            // Custom event on December 15
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
          } else if (strTime === '2023-05-27') {
            // Custom event on December 15
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
          } else if (strTime === '2023-05-28') {
            // Custom event on December 15
            items[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
          } else if (strTime === '2023-06-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Refugees Day on 20th',
              height: 50,
            });
          } else if (strTime === '2023-06-30') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Day against Human Trafficking on the 30th',
              height: 50,
            });
          } else if (strTime === '2023-08-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Humanitarian Day on the 19th',
              height: 50,
            });
          } else if (strTime === '2023-08-30') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Day for the Disappear on the 30th',
              height: 50,
            });
          } else if (strTime === '2023-09-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'United Nations General Assembly in New York',
              height: 50,
            });
          } else if (strTime === '2023-09-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Executive Committee meeting of the United Nations High Commission on Refugees in New York ',
              height: 50,
            });
          } else if (strTime === '2023-10-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Day for Disaster Risk Reduction on the 13th ',
              height: 50,
            });
          } else if (strTime === '2023-11-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'National Migration Dialogue',
              height: 50,
            });
          } else if (strTime === '2023-11-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'United Nations Climate Change 2023 (Cop 28)',
              height: 50,
            });
          } else if (strTime === '2023-12-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva ',
              height: 50,
            });
          } else if (strTime === '2023-12-14') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva  ',
              height: 50,
            });
          } else if (strTime === '2023-12-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva',
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

export default Humanitarian;