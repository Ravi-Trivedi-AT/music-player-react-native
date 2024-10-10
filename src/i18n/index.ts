import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './languages/en.json';
import fr from './languages/fr.json';
import hindi from './languages/hindi.json';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {useEffect} from 'react';

export const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
  hindi: {
    translation: hindi,
  },
};

// Initialize i18n
i18n.use(initReactI18next).init({
  resources: {
    en: {translation: en},
    fr: {translation: fr},
    hindi: {translation: hindi},
  },
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

// Custom hook to sync i18n with Redux state
export const useSyncLanguageWithI18n = () => {
  const language = useSelector((state: RootState) => state.language.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
};

export default i18n;
