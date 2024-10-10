import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {setLanguage} from '../features/language/languageSlice';
import {NavigationProp} from '@react-navigation/native';
import {DrawerParamList} from '../types/navigation';

interface Props {
  navigation: NavigationProp<DrawerParamList>;
}

const Languages = ({navigation}: Props) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const changeLanguage = (lang: String) => {
    dispatch(setLanguage(lang)); // 'en', 'es', etc.
  };
  return (
    <View style={styles.container}>
      <View style={styles.langBtnContainer}>
        <Button title="English" onPress={() => changeLanguage('en')} />
        <Button title="Hindi" onPress={() => changeLanguage('hindi')} />
        <Button title="French" onPress={() => changeLanguage('fr')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>

      <View>
        <Text>{t('welcome')}</Text>
        <Text>{t('home.title')}</Text>
        <Text>{t('home.description')}</Text>
      </View>
      <View style={styles.langBtnContainer}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default Languages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  langBtnContainer: {
    padding: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
