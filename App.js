import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ApolloProvider } from '@apollo/client';
import client from './apolloClient/client';

import Rooms from './components/views/Rooms';
import Room from './components/views/Room';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Rooms" component={Rooms} />
            <Stack.Screen name="Room" component={Room} />
          </Stack.Navigator>
        </NavigationContainer>
    </ApolloProvider>
  );
}
