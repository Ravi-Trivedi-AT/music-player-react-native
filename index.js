import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';

if (Platform.OS === 'web') {
  require('./gesture-handler');
}
TrackPlayer.registerPlaybackService(() => require('./service'));
AppRegistry.registerComponent(appName, () => App);
