import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Login/LoginScreen';
import SignUpScreen from '../SignUp/SignUpScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import AccountScreen from '../AccountScreen/AccountScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false // Hapus header dari semua screen dalam navigator
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;