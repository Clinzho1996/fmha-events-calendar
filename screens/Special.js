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

const Special = ({navigation}) => {
  const [items, setItems] = useState({});
  const now = new Date();

  const loadItems = day => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          if (strTime === '2023-03-21') {
            // Custom event on February
            items[strTime].push({
              name: 'World Down Syndrome Day on 21st ',
              height: 50,
            });
          } else if (strTime === '2023-04-02') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Autism Day on 2nd ',
              height: 50,
            });
          } else if (strTime === '2023-09-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Day of Sign Languages on 23rd ',
              height: 50,
            });
          } else if (strTime === '2023-04-25') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Week of the Deaf (Last Week)',
              height: 50,
            });
          } else if (strTime === '2023-10-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'White Cane Safety Day on 15th ',
              height: 50,
            });
          } else if (strTime === '2023-12-03') {
            // Custom event on December 15
            items[strTime].push({
              name: 'International Day of Persons With Disabilities on 3rd',
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

export default Special;
