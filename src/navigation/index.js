import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AboutUs,
  RateApp,
  PlantAddDetails,
  PlantCategories,
  PlantDetails,
  PlantUpdateDetails,
  PlantViewAllDetails,
  PlantShowDetails,
  HomeScreen,
} from '../screens';
import {View, Text,StatusBar} from 'react-native';

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content"/>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="HomeScreen">
        <Stack.Screen component={HomeScreen} name="HomeScreen" />
        <Stack.Screen component={RateApp} name="RateApp" />
        <Stack.Screen component={AboutUs} name="AboutUs" />
        <Stack.Screen component={PlantAddDetails} name="PlantAddDetails" />
        <Stack.Screen component={PlantCategories} name="PlantCategories" />
        <Stack.Screen component={PlantDetails} name="PlantDetails" />
        <Stack.Screen component={PlantShowDetails} name="PlantShowDetails" />
        <Stack.Screen
          component={PlantUpdateDetails}
          name="PlantUpdateDetails"
        />
        <Stack.Screen
          component={PlantViewAllDetails}
          name="PlantViewAllDetails"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
