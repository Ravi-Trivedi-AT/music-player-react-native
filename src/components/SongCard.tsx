import {
  Alert,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {sizes} from '../constants/sizes';
import {fontFamily} from '../constants/fonts';
import TrackPlayer from 'react-native-track-player';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {DarkTheme, LightTheme} from '../theme';
const imgUrl =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/936/325x325/royalty-1619082030-xBgqGZWLw9.jpg';

interface Songs {
  id: string | null;
  url: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  date: string;
  artwork: string;
  duration: number;
}

interface SongCardProps {
  id: string | null;
  imageUrl?: string;
  title: string;
  url: string;
  artist?: string;
  isPlaying?: boolean;
  setCurrSongId?: (value: string | null) => void;
  setIsPlaying?: (value: boolean) => void;
  artwork: string;
  imageWidth?: number;
  imageHeight?: number;
  containerStyle?: StyleProp<ViewStyle>;
  songs?: Songs[];
}

const SongCard = ({
  imageUrl = imgUrl,
  title,
  artist,
  url,
  artwork,
  isPlaying,
  setCurrSongId,
  setIsPlaying,
  imageWidth = 250,
  imageHeight = 250,
  containerStyle,
  id,
}: SongCardProps) => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const theme = isDarkMode ? DarkTheme : LightTheme;

  const handlePlay = async () => {
    try {
      if (isPlaying) {
        await TrackPlayer.reset(); // Pause the current track
        console.log('Paused current track');
        setIsPlaying?.(false);
      } else {
        // Add a track to the queue
        await TrackPlayer.add({
          id: id,
          url: url,
          title: title,
          artist: artist,
          artwork: artist,
        });
        console.log('Track added');
        // Start playing it
        await TrackPlayer.play();
        setCurrSongId?.(id);
        setIsPlaying?.(true);
        console.log('Playing track');
      }
    } catch (error) {
      console.error('Error playing track:', error);
      Alert.alert('Error', 'An error occurred while trying to play the track.');
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePlay}>
      <View style={[styles.songImgContainer, containerStyle && containerStyle]}>
        <Image
          style={[styles.songImg, {width: imageWidth, height: imageHeight}]}
          source={{uri: artwork}}
          resizeMode="contain"
        />
      </View>
      <View
        style={[styles.songTitleContainer, imageWidth && {width: imageWidth}]}>
        <Text style={[styles.songTitle, {color: theme.colors.text}]}>
          {title}
        </Text>
      </View>
      <View
        style={[styles.songAuthorContainer, imageWidth && {width: imageWidth}]}>
        <Text style={[styles.songAuthor, {color: theme.colors.text}]}>
          {artist}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SongCard;

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 250,
  },
  songImgContainer: {},
  songImg: {
    width: 250,
    height: 250,
    borderRadius: 14,
  },
  songTitleContainer: {},
  songTitle: {
    fontSize: sizes[6],
    fontFamily: fontFamily.JakartaMedium,
    textAlign: 'center',
  },
  songAuthorContainer: {},
  songAuthor: {
    fontSize: sizes[3],
    fontFamily: fontFamily.JakartaMedium,
    textAlign: 'center',
  },
});
