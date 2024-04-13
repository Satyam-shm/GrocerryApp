import React from 'react';

import 'react-native-gesture-handler';

import Home from '../screens/Home';
import Search from '../screens/Search';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {VectorIcon} from '../utils';
import HomeNavigator from './HomeNavigator';
import Wishlist from '../screens/Wishlist';
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="home"
        component={HomeNavigator}
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
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarActiveTintColor: '#BF40BF',
          lazy: false,
          tabBarIcon: ({focused}) => (
            <VectorIcon
              name="cards-heart"
              isMaterialCommunityIcon
              style={{fontSize: 26, color: focused ? '#BF40BF' : 'black'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
