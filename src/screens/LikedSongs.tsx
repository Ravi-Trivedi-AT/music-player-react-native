import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SongCard from '../components/SongCard';
import {sizes} from '../constants/sizes';
import {fontFamily} from '../constants/fonts';
import {songs} from '../data/songs';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {DarkTheme, LightTheme} from '../theme';

interface ListHeaderProps {
  title: string;
}

const ListHeader = ({title}: ListHeaderProps) => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const theme = isDarkMode ? DarkTheme : LightTheme;
  return (
    <View style={styles.recommendedTextContainer}>
      <Text style={[styles.recommendedText, {color: theme.colors.text}]}>
        {title}
      </Text>
    </View>
  );
};

const LikedSongs = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const theme = isDarkMode ? DarkTheme : LightTheme;

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Header />
      <View>
        <ListHeader title="Liked songs" />
        <FlatList
          data={songs}
          numColumns={2}
          renderItem={({item}) => (
            <SongCard
              imageWidth={150}
              imageHeight={150}
              containerStyle={{
                height: 150,
                width: 150,
              }}
              {...item}
            />
          )}
          style={styles.flatListContainer}
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingBottom: 200,
          }}
        />
      </View>
    </View>
  );
};

export default LikedSongs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  flatListContainer: {
    paddingVertical: 20,
  },
  recommendedTextContainer: {
    paddingHorizontal: 20,
  },
  songList: {
    flex: 1,
    marginLeft: 20,
  },
  recommendedText: {
    fontSize: sizes[8],
    fontFamily: fontFamily.JakartaSemiBold,
  },
});
