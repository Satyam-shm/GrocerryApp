import React from 'react';

import 'react-native-gesture-handler';

import Home from '../screens/Home';
import Search from '../screens/Search';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {VectorIcon} from '../utils';
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: '#BF40BF',
          tabBarIcon: ({focused}) => (
            <VectorIcon
              name="home"
              isMaterialCommunityIcon
              style={{fontSize: 26, color: focused ? '#BF40BF' : 'black'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarActiveTintColor: '#BF40BF',
          lazy: false,
          tabBarIcon: ({focused}) => (
            <VectorIcon
              name="magnify"
              isMaterialCommunityIcon
              style={{fontSize: 26, color: focused ? '#BF40BF' : 'black'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
