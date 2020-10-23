import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ApolloProvider } from '@apollo/client';
import client from './apolloClient/client';

import Rooms from './components/views/Rooms';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View>
        <Rooms />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
