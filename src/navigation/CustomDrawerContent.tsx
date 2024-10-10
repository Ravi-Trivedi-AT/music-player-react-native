import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {icons} from '../constants/icons';
import {sizes} from '../constants/sizes';
import SCREEN_NAMES from '../constants/screenNames';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {DarkTheme, LightTheme} from '../theme';
import {toggleTheme} from '../features/theme/themeSlice';
const {HOME, LIKED_SONGS, LANGUAGES} = SCREEN_NAMES;

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const {navigation} = props;
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  const theme = isDarkMode ? DarkTheme : LightTheme;

  const handleCloseDrawer = () => {
    navigation.closeDrawer();
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <DrawerContentScrollView
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={styles.drawerHeaderContainer}>
        <View>
          <TouchableOpacity onPress={handleCloseDrawer}>
            <AntDesign
              name={icons.Close}
              size={sizes[11]}
              color={theme.colors.text}
            />
          </TouchableOpacity>
        </View>
        <View>
          {isDarkMode ? (
            <TouchableOpacity onPress={handleThemeToggle}>
              <Feather
                name={icons.Moon}
                size={sizes[11]}
                color={theme.colors.text}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleThemeToggle}>
              <Feather
                name={icons.Sun}
                size={sizes[11]}
                color={theme.colors.text}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.drawerMenuContainer}>
        <DrawerItem
          label="Home"
          icon={() => (
            <AntDesign
              name={icons.Home}
              size={sizes[11]}
              color={theme.colors.text}
            />
          )}
          onPress={() => navigation.navigate(HOME)}
          labelStyle={{
            color: theme.colors.text,
            fontSize: sizes[6],
          }}
        />
        <DrawerItem
          label="Languages"
          icon={() => (
            <Ionicons
              name={icons.Language}
              size={sizes[11]}
              color={theme.colors.text}
            />
          )}
          onPress={() => navigation.navigate(LANGUAGES)}
          labelStyle={{
            color: theme.colors.text,
            fontSize: sizes[6],
          }}
        />
        <DrawerItem
          label="Liked songs"
          icon={() => (
            <AntDesign
              name={icons.Heart}
              size={sizes[11]}
              color={theme.colors.text}
            />
          )}
          onPress={() => navigation.navigate(LIKED_SONGS)}
          labelStyle={{
            color: theme.colors.text,
            fontSize: sizes[6],
          }}
        />
        <DrawerItem
          label="Profile"
          icon={() => (
            <AntDesign
              name={icons.User}
              size={sizes[11]}
              color={theme.colors.text}
            />
          )}
          onPress={() => {}}
          labelStyle={{
            color: theme.colors.text,
            fontSize: sizes[6],
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  drawerMenuContainer: {},
});
