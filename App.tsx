import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigation';
import TrackPlayer from 'react-native-track-player';
import {Provider} from 'react-redux';
import {store} from './store';
// import 'intl-pluralrules';

// The player is ready to be used
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const setUpTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
    } catch (error) {
      console.log('error ---', error);
    }
  };

  useEffect(() => {
    setUpTrackPlayer();
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
