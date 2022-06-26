import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStack from './RootStack';
import WelcomeScreen from './screens/WelcomeScreen'
import RegisterScreen from './screens/RegisterScreen ';
import LoginScreen from './screens/LoginScreen';
import ItemsScreen from './screens/ItemsScreen';
import VegatableScreen from './screens/VegatableScreen';
import FruitScreen from './screens/FruitScreen';
import MedicineScreen from './screens/MedicineScreen';
import GroceryScreen from './screens/GroceryScreen';
import Screen from './screens/Screen'
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* 
      
      <FruitScreen />
      <VegatableScreen />
      <GroceryScreen />
      <MedicineScreen />
      <LoginScreen />
      <RegisterScreen />
      <WelcomeScreen />
      <ItemsScreen />
      <Screen />
    */}
      <RootStack />
    </View>
  );
}

const styles = StyleSheet.create({

});
