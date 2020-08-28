import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/components/Home';
import WebRTC from './src/components/WebRTC';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WebRTC" component={WebRTC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
