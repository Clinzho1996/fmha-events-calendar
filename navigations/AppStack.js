/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Loading from '../screens/Loading';
import Onboarding from '../screens/Onboarding';
import Main from '../screens/Main';
import Forgot from '../screens/Forgot';
import Planning from '../screens/Planning';
import HumanRes from '../screens/HumanRes';
import Reforms from '../screens/Reforms';
import Special from '../screens/Special';
import Finance from '../screens/Finance';
import Internal from '../screens/Internal';
import Humanitarian from '../screens/Humanitarian';
import Social from '../screens/Social';

const AppStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        DrawerNavigatorBarVisible: false,
      }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="Planning" component={Planning} />
      <Stack.Screen name="HumanRes" component={HumanRes} />
      <Stack.Screen name="Reforms" component={Reforms} />
      <Stack.Screen name="Special" component={Special} />
      <Stack.Screen name="Finance" component={Finance} />
      <Stack.Screen name="Internal" component={Internal} />
      <Stack.Screen name="Humanitarian" component={Humanitarian} />
      <Stack.Screen name="Social" component={Social} />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
