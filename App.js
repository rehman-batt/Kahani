import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './components/home_page';
import GeneratingPage from './components/generating_story';
import LoadingPage from './components/loading_page';
import StorySaved from './components/story_saved_page';
import StartStory from './components/maheen';
import OutputPage from './components/output_page';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Load" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Generate" component={GeneratingPage} />
        <Stack.Screen name="Start" component={StartStory} />
        <Stack.Screen name="Out" component={OutputPage} />
        <Stack.Screen name="Load" component={LoadingPage} />
        <Stack.Screen name="Saved" component={StorySaved} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});
