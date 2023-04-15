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

const Planning = ({navigation}) => {
  const [items, setItems] = useState({});
  const now = new Date();

  const loadItems = day => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          if (strTime === '2023-02-09') {
            // Custom event on February
            items[strTime].push({
              name: 'Technical Review Retreat for Delivery Managers and Delivery Desk Officers of Ministries from the 9th – 11th',
              height: 50,
            });
          } else if (strTime === '2023-02-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production of the year 2022 Annual Report for the Ministry and its Agencies',
              height: 50,
            });
          } else if (strTime === '2023-02-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Training and Workshops on Monitoring and Evaluation in collaboration with the Federal Ministry of Finance, Budget, and National Planning',
              height: 50,
            });
          } else if (strTime === '2023-02-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Tracking of updates for the development and population of the Unified National Social Register ',
              height: 50,
            });
          } else if (strTime === '2023-03-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production of Year Planner for the Ministry and its Agencies',
              height: 50,
            });
          } else if (strTime === '2023-03-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production of Compendium for Presidential Handover',
              height: 50,
            });
          } else if (strTime === '2023-03-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production of the year 2022 Directory for the Ministry and its Agencies',
              height: 50,
            });
          } else if (strTime === '2023-03-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Report of the Ministerial mandate to the Central Coordinating Delivery Unit (CCDU)',
              height: 50,
            });
          } else if (strTime === '2023-03-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Management meetings with heads of agencies',
              height: 50,
            });
          } else if (strTime === '2023-03-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Sector Monitoring of Projects for the Ministry and its Agencies',
              height: 50,
            });
          } else if (strTime === '2023-04-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Development Plan Implementation Unit on the 5th @ Abuja',
              height: 50,
            });
          } else if (strTime === '2023-04-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Advocacy and Coordination Visits to States without Humanitarian Ministry ',
              height: 50,
            });
          } else if (strTime === '2023-04-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Training and Workshops on Gender-Based Violence ',
              height: 50,
            });
          } else if (strTime === '2023-04-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production of memorandum of the Ministry and its Agencies – As the need arises',
              height: 50,
            });
          } else if (strTime === '2023-05-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Training and Workshops on Public Private Partnership and its establishment as a Unit for the Ministry and its Agencies',
              height: 50,
            });
          } else if (strTime === '2023-05-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Engagement with Stakeholders in the Development of short, medium, and long-term deliverables aligned with strategic pillars and thematic areas of the Roadmap  ',
              height: 50,
            });
          } else if (strTime === '2023-05-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Tracking of updates for the development and population of the Unified National Social Register  ',
              height: 50,
            });
          } else if (strTime === '2023-05-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Robust Monitoring and Evaluation of the Ministry’s Policies, Programmes and Projects in the six (6) geopolitical zones',
              height: 50,
            });
          } else if (strTime === '2023-06-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Development Plan Implementation Unit on the 7th @ Abuja',
              height: 50,
            });
          } else if (strTime === '2023-06-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Hosting of the Nigeria International Humanitarian Summit',
              height: 50,
            });
          } else if (strTime === '2023-06-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Advocacy and Coordination Visits to States without Humanitarian Ministry',
              height: 50,
            });
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Report of the Ministerial mandate to the Central Coordinating Delivery Unit (CCDU)',
              height: 50,
            });
          } else if (strTime === '2023-06-17') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Baseline Studies on Policies, Programmes, and Projects of the Ministry in Six (6)  geopolitical zones',
              height: 50,
            });
          } else if (strTime === '2023-06-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Management meetings with heads of agencies',
              height: 50,
            });
          } else if (strTime === '2023-06-21') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Sector Monitoring of Projects for the Ministry and its Agencies',
              height: 50,
            });
          } else if (strTime === '2023-06-24') {
            // Custom event on December 15
            items[strTime].push({
              name: 'MDAs Quarterly Performance Review',
              height: 50,
            });
          } else if (strTime === '2023-07-03') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Annual Statutory Bi-lateral and Multi-lateral engagement – 3rd Quarter, 2023',
              height: 50,
            });
          } else if (strTime === '2023-07-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production of memorandum of the Ministry and its Agencies – As the need arises',
              height: 50,
            });
          } else if (strTime === '2023-08-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'National Council on Humanitarian Affairs ',
              height: 50,
            });
          } else if (strTime === '2023-08-03') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Baseline Studies on Policies, Programmes, and Projects of the Ministry in Six (6)  geopolitical zones',
              height: 50,
            });
          } else if (strTime === '2023-08-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Engagement with Stakeholders in the Development of short, medium, and long-term deliverables aligned with strategic pillars and thematic areas of the Roadmap ',
              height: 50,
            });
          } else if (strTime === '2023-08-09') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Tracking of updates for the development and population of the Unified National Social Register',
              height: 50,
            });
          } else if (strTime === '2023-09-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Development Plan Implementation Unit on the 6th @ Abuja',
              height: 50,
            });
          } else if (strTime === '2023-09-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Advocacy and Coordination Visits to States without Humanitarian Ministry ',
              height: 50,
            });
          } else if (strTime === '2023-09-17') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Bi-annual Policy and KPIs tracking and coordination meetings with the Ministry and Agencies ',
              height: 50,
            });
          } else if (strTime === '2023-09-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Annual Conference of NGOs ',
              height: 50,
            });
          } else if (strTime === '2023-09-21') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Report of the Ministerial mandate to the Central Coordinating Delivery Unit (CCDU)',
              height: 50,
            });
          } else if (strTime === '2023-09-23') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Management meetings with heads of agencies              ',
              height: 50,
            });
          } else if (strTime === '2023-09-25') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Sector Monitoring of Projects for the Ministry and its Agencies ',
              height: 50,
            });
          } else if (strTime === '2023-09-28') {
            // Custom event on December 15
            items[strTime].push({
              name: 'MDAs Quarterly Performance Review ',
              height: 50,
            });
          } else if (strTime === '2023-10-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Management Retreat',
              height: 50,
            });
          } else if (strTime === '2023-10-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Annual Coordination meeting and target setting for NGOs',
              height: 50,
            });
          } else if (strTime === '2023-10-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Training and Workshops on Monitoring and Evaluation in collaboration with the Federal Ministry of Finance, Budget, and National Planning.',
              height: 50,
            });
          } else if (strTime === '2023-10-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production of memorandum of the Ministry and its Agencies – As the need arises ',
              height: 50,
            });
          } else if (strTime === '2023-11-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Advocacy and Coordination Visits to States without Humanitarian Ministry ',
              height: 50,
            });
          } else if (strTime === '2023-11-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Annual Sector Performance Assessment meeting',
              height: 50,
            });
          } else if (strTime === '2023-11-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Baseline Studies on Policies, Programmes, and Projects of the Ministry in Six (6)  geopolitical zones',
              height: 50,
            });
          } else if (strTime === '2023-11-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sector Performance Planning Retreat',
              height: 50,
            });
          } else if (strTime === '2023-12-06') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Development Plan Implementation Unit on the 6th @ Abuja',
              height: 50,
            });
          } else if (strTime === '2023-12-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Report of the Ministerial mandate to the Central Coordinating Delivery Unit (CCDU)  ',
              height: 50,
            });
          } else if (strTime === '2023-12-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Management meetings with heads of agencies ',
              height: 50,
            });
          } else if (strTime === '2023-12-13') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Sector Monitoring of Projects for the Ministry and its Agencies',
              height: 50,
            });
          } else if (strTime === '2023-12-17') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Tracking of updates for the development and population of the Unified National Social Register',
              height: 50,
            });
          } else if (strTime === '2023-12-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production of memorandum of the Ministry and its Agencies – As the need arises',
              height: 50,
            });
          } else if (strTime === '2023-12-25') {
            // Custom event on December 15
            items[strTime].push({
              name: 'MDAs Quarterly Performance Review',
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
              <Avatar.Text label="P" style={{backgroundColor: '#99dd7a'}} />
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

export default Planning;
