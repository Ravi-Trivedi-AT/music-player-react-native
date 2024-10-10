import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SCREEN_NAMES from '../constants/screenNames';
import StackNavigator from './StackNavigator';
import {DrawerParamList} from '../types/navigation';
import LikedSongs from '../screens/LikedSongs';
import Languages from '../screens/Languages';
import CustomDrawerContent from './CustomDrawerContent';
const {DRAWER_HOME, LIKED_SONGS, LANGUAGES} = SCREEN_NAMES;
const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name={DRAWER_HOME} component={StackNavigator} />
      <Drawer.Screen name={LIKED_SONGS} component={LikedSongs} />
      <Drawer.Screen name={LANGUAGES} component={Languages} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
