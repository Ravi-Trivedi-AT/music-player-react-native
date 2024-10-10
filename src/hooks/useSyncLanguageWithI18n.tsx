import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {useEffect} from 'react';
import i18n from '../i18n';

// Custom hook to sync i18n with Redux state
export const useSyncLanguageWithI18n = () => {
  const language = useSelector((state: RootState) => state.language.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
};
