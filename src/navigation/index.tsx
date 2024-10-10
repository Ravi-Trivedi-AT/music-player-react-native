import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import {useSyncLanguageWithI18n} from '../hooks/useSyncLanguageWithI18n';

const Navigation = () => {
  useSyncLanguageWithI18n();
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
