import React from 'react';

import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Search from '../screens/Search';

import HomeNavigator from './HomeNavigator';
const Drawer = createDrawerNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="HomeNavigator" component={HomeNavigator} />
        <Drawer.Screen name="Search" component={Search} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
