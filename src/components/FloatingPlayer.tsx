import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {sizes} from '../constants/sizes';
import {colors} from '../constants/colors';
import {fontFamily} from '../constants/fonts';
import {ForwardButton, PlayPauseButton, PreviousButton} from './PlayerControll';
import Slider from '@react-native-community/slider';
import {useEffect, useRef} from 'react';
import {songs} from '../data/songs';

const imgUrl =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/757/325x325/desperate-1727222452-FZRAmrmXyX.jpg';

interface Props {
  currSongId: string | null;
  isPlaying: boolean;
}

const FloatingPlayer = ({currSongId, isPlaying}: Props) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width;

  const currSongDetails = songs.find(song => song.id === currSongId);

  useEffect(() => {
    // Start the animation loop
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -screenWidth, // Move to the left end of the screen
        duration: 5000, // 5 seconds for a full transition
        useNativeDriver: true,
      }),
    ).start();
  }, [translateX, screenWidth]);

  const handlePlayerNavigation = () => {};

  if (!currSongDetails) {
    return;
  }

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor={colors.warning['400']}
        />
      </View>
      <TouchableOpacity
        style={styles.touchableContainer}
        activeOpacity={0.98}
        onPress={handlePlayerNavigation}>
        {/* Img container */}
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={{uri: currSongDetails.artwork}}></Image>
        </View>
        {/* Title & Author container */}
        <View style={styles.songDetailContainer}>
          <View style={styles.songTitleContainer}>
            <Animated.Text
              numberOfLines={1}
              style={[
                styles.songTitle,
                {
                  transform: [{translateX: translateX}],
                  width: 9999,
                },
              ]}>
              {currSongDetails.title}
            </Animated.Text>
          </View>
          <View style={styles.songAuthorContainer}>
            <Text style={styles.songAuthor}>{currSongDetails.artist}</Text>
          </View>
        </View>
        {/* Song activity container */}
        <View style={styles.songActivityContainer}>
          <PreviousButton />
          <PlayPauseButton isPlaying={isPlaying} />
          <ForwardButton />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  container: {},
  touchableContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.primary['600'],
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
  },
  slider: {
    width: '100%',
    height: 30,
    backgroundColor: colors.primary['600'],
  },
  sliderContainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
  },
  imgContainer: {},
  img: {
    height: 80,
    width: 80,
  },
  songDetailContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  songTitleContainer: {
    overflow: 'hidden',
  },
  songTitle: {
    fontSize: sizes[5],
    color: colors.primary['100'],
    fontFamily: fontFamily.JakartaRegular,
  },
  songAuthorContainer: {
    overflow: 'hidden',
  },
  songAuthor: {
    fontSize: sizes[3],
    color: colors.primary['100'],
    fontFamily: fontFamily.JakartaMedium,
  },
  songActivityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    overflow: 'hidden',
  },
});
