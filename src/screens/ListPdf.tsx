import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';
import {RootNativeStackParamList} from '../types/navigation';
import {NavigationProp} from '@react-navigation/native';
import SCREEN_NAMES from '../constants/screenNames';
const {VIEW_PDF} = SCREEN_NAMES;
interface ListPdfProps {
  navigation: NavigationProp<RootNativeStackParamList>;
}

const ListPdf = ({navigation}: ListPdfProps) => {
  const handleRedirect = () => {
    navigation.navigate(VIEW_PDF);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} onPress={handleRedirect}>
        <Text style={styles.btnText}>View Document</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListPdf;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    width: 200,
    height: 80,
    backgroundColor: colors.danger['400'],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  btnText: {
    fontSize: sizes[8],
  },
});
