/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card, Avatar} from 'react-native-paper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Departments = ({navigation}) => {
  return (
    <View style={{width: width, height: height, backgroundColor: '#fafafa'}}>
      <Text
        style={{
          padding: 30,
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 24,
        }}>
        2023 Year Planner
      </Text>
      <ScrollView style={{marginBottom: 80}}>
        <View style={{paddingHorizontal: 20}}>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Planning')}>
                <Text style={{color: '#000', fontSize: 16}}>
                  Planning, Research and Statistics Department
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Humanitarian')}>
                <Text style={{color: '#000', fontSize: 16}}>
                  Humanitarian Affairs Department
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Reforms')}>
                <Text style={{color: '#000', fontSize: 16}}>
                  Reforms Coordination and Service Improvement Department
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Special')}>
                <Text style={{color: '#000', fontSize: 16}}>
                  Special Needs Department
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Finance')}>
                <Text style={{color: '#000', fontSize: 16}}>
                  Finance and Accounts Department
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Internal')}>
                <Text style={{color: '#000', fontSize: 16}}>
                  Internal Audit Department
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('HumanRes')}>
                <Text style={{color: '#000', fontSize: 16}}>
                  Human Resource Management Department
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Social')}>
                <Text style={{color: '#000', fontSize: 16}}>
                  Social Development Department
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity style={styles.card}>
                <Text style={{color: '#000', fontSize: 16}}>
                  General Services Department
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity style={styles.card}>
                <Text style={{color: '#000', fontSize: 16}}>
                  Procurement Department
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity style={styles.card}>
                <Text style={{color: '#000', fontSize: 16}}>
                  Legal Services Department
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity style={styles.card}>
                <Text style={{color: '#000', fontSize: 16}}>
                  Special Duties Department
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity style={styles.card}>
                <Text style={{color: '#000', fontSize: 16}}>Press Unit</Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity style={styles.card}>
                <Text style={{color: '#000', fontSize: 16}}>
                  National Commission for Refugees, Migrants and Internally
                  Displaced Persons (NCFRMI)
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity style={styles.card}>
                <Text style={{color: '#000', fontSize: 16}}>
                  National Emergency Management Agency (NEMA)
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity style={styles.card}>
                <Text style={{color: '#000', fontSize: 16}}>
                  National Commission for Persons with Disabilities (NCPWD)
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity style={styles.card}>
                <Text style={{color: '#000', fontSize: 16}}>
                  National Senior Citizens Centre
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity style={styles.card}>
                <Text style={{color: '#000', fontSize: 16}}>
                  National Agency for the Prohibition of Trafficking in Persons
                  (NAPTIP)
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity style={styles.card}>
                <Text style={{color: '#000', fontSize: 16}}>
                  North East Development Commission (NEDC)
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity style={styles.card}>
                <Text style={{color: '#000', fontSize: 16}}>
                  Senior Special Assistant – Sustainable Development Goals
                  (SDGs)
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity style={styles.card}>
                <Text style={{color: '#000', fontSize: 16}}>
                  National Home Grown School Feeding Programme (NHGSFP)
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity style={styles.card}>
                <Text style={{color: '#000', fontSize: 16}}>N/POWER</Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity style={styles.card}>
                <Text style={{color: '#000', fontSize: 16}}>
                  Government Enterprise Empowerment Programme (GEEP)
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity style={styles.card}>
                <Text style={{color: '#000', fontSize: 16}}>
                  National Cash Transfer Office (NCTO)
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
            }}>
            <Card.Content>
              <TouchableOpacity style={styles.card}>
                <Text style={{color: '#000', fontSize: 16}}>
                  Events / Programmes and Commemoration Days of the Humanitarian
                  Sector
                </Text>
                <Icon name="caret-forward-outline" size={25} color="#38c275" />
              </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default Departments;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 10,
    paddingHorizontal: 5,
  },
});
