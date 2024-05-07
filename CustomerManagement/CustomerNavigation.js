// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CustomerLogin } from './CustomerLogin';
import { CustomerRegister } from './CustomerRegister';
import CustomerHome from './CustomerHome';
import CustomerEdit from './CustomerEdit';


const Stack = createNativeStackNavigator();

function CustomerNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={CustomerLogin} 
        options={{headerShown:false}}
        />
        <Stack.Screen name="Register" component={CustomerRegister} 
        options={{headerShown:true}}
        />
        <Stack.Screen name="Home" component={CustomerHome} 
        options={{headerShown:false}}
        />
        <Stack.Screen name="Edit" component={CustomerEdit} 
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default CustomerNavigation;