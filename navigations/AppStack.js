/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Loading from '../screens/Loading';
import Onboarding from '../screens/Onboarding';
import Main from '../screens/Main';
import Planning from '../screens/Planning';
import HumanRes from '../screens/HumanRes';
import Reforms from '../screens/Reforms';
import Special from '../screens/Special';
import Finance from '../screens/Finance';
import Internal from '../screens/Internal';
import Humanitarian from '../screens/Humanitarian';
import Social from '../screens/Social';
import General from '../screens/General';
import Procure from '../screens/Procure';
import Legal from '../screens/Legal';
import SpecialDuties from '../screens/SpecialDuties';
import Press from '../screens/Press';
import NationalCom from '../screens/NationalCom';
import NationEmer from '../screens/NationEmer';
import NationalDis from '../screens/NationalDis';
import NationalSen from '../screens/NationalSen';
import NationalAgency from '../screens/NationalAgency';
import North from '../screens/North';
import Senior from '../screens/Senior';

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
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Planning" component={Planning} />
      <Stack.Screen name="HumanRes" component={HumanRes} />
      <Stack.Screen name="Reforms" component={Reforms} />
      <Stack.Screen name="Special" component={Special} />
      <Stack.Screen name="Finance" component={Finance} />
      <Stack.Screen name="Internal" component={Internal} />
      <Stack.Screen name="Humanitarian" component={Humanitarian} />
      <Stack.Screen name="Social" component={Social} />
      <Stack.Screen name="General" component={General} />
      <Stack.Screen name="Procure" component={Procure} />
      <Stack.Screen name="Legal" component={Legal} />
      <Stack.Screen name="SpecialDuties" component={SpecialDuties} />
      <Stack.Screen name="Press" component={Press} />
      <Stack.Screen name="NationalCom" component={NationalCom} />
      <Stack.Screen name="NationEmer" component={NationEmer} />
      <Stack.Screen name="NationalDis" component={NationalDis} />
      <Stack.Screen name="NationalSen" component={NationalSen} />
      <Stack.Screen name="NationalAgency" component={NationalAgency} />
      <Stack.Screen name="North" component={North} />
      <Stack.Screen name="Senior" component={Senior} />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
