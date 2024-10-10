import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {icons} from '../constants/icons';
import {sizes} from '../constants/sizes';
import {colors} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerParamList} from '../types/navigation';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {DarkTheme, LightTheme} from '../theme';

const Header = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const theme = isDarkMode ? DarkTheme : LightTheme;
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={toggleDrawer}>
          <FontAwesome5
            name={icons.DoubleLines}
            size={sizes[11]}
            color={theme.colors.text}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <AntDesign
            name={icons.Search}
            size={sizes[11]}
            color={theme.colors.text}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
});
