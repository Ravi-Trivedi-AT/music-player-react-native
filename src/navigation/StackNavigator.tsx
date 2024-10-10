import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREEN_NAMES from '../constants/screenNames';
import {RootNativeStackParamList} from '../types/navigation';
import LikedSongs from '../screens/LikedSongs';
import Home from '../screens/Home';
import ListPdf from '../screens/ListPdf';
import ViewPdf from '../screens/ViewPdf';
const {HOME, LIKED_SONGS, LIST_PDF, VIEW_PDF} = SCREEN_NAMES;

const Stack = createNativeStackNavigator<RootNativeStackParamList>();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={HOME}>
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={LIST_PDF} component={ListPdf} />
      <Stack.Screen name={VIEW_PDF} component={ViewPdf} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
