import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen ';
import LoginScreen from './screens/LoginScreen';
import ItemsScreen from './screens/ItemsScreen';
import VegatableScreen from './screens/VegatableScreen';
import FruitScreen from './screens/FruitScreen';
import GroceryScreen from './screens/GroceryScreen';
import MedicineScreen from './screens/MedicineScreen'

const Stack = createNativeStackNavigator()

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome"
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Items" component={ItemsScreen} />
                <Stack.Screen name="vegetable" component={VegatableScreen} />
                <Stack.Screen name="fruits" component={FruitScreen} />
                <Stack.Screen name="grocery" component={GroceryScreen} />
                <Stack.Screen name="medicine" component={MedicineScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;