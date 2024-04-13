import React from 'react';

import 'react-native-gesture-handler';
import Home from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetail from '../screens/ProductDetail';
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
