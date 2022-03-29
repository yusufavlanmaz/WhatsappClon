import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './Pages/App';

const Stack = createNativeStackNavigator();
function Router() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
           headerShown: false
        }} >
          <Stack.Screen 
          
          name="Home" component={App} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default Router;