import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../constants/colors';
import Header from '../components/Header';
import {sizes} from '../constants/sizes';
import {fontFamily} from '../constants/fonts';
import SongCard from '../components/SongCard';
import FloatingPlayer from '../components/FloatingPlayer';
import {songs} from '../data/songs';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {DarkTheme, LightTheme} from '../theme';

const ItemSeparator = () => {
  return (
    <View
      style={{
        marginHorizontal: sizes[1],
      }}
    />
  );
};

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

const Home = () => {
  const [currSongId, setCurrSongId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const theme = isDarkMode ? DarkTheme : LightTheme;

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Header />

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.listContainer}>
          <ListHeader title="Recommended for you" />
          <FlatList
            data={songs}
            renderItem={({item}) => (
              <SongCard
                {...item}
                setCurrSongId={setCurrSongId}
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            style={styles.songList}
            ItemSeparatorComponent={ItemSeparator}
            contentContainerStyle={{
              marginTop: 20,
            }}
          />
        </View>
        <View style={styles.listContainer}>
          <ListHeader title="New Release" />
          <FlatList
            data={songs}
            renderItem={({item}) => (
              <SongCard
                {...item}
                setCurrSongId={setCurrSongId}
                isPlaying={isPlaying}
              />
            )}
            horizontal={true}
            style={styles.songList}
            ItemSeparatorComponent={ItemSeparator}
            contentContainerStyle={{
              marginTop: 20,
            }}
          />
        </View>
        <View style={styles.listContainer}>
          <ListHeader title="NCS Songs" />
          <FlatList
            data={songs}
            renderItem={({item}) => (
              <SongCard
                {...item}
                setCurrSongId={setCurrSongId}
                isPlaying={isPlaying}
              />
            )}
            horizontal={true}
            style={styles.songList}
            ItemSeparatorComponent={ItemSeparator}
            contentContainerStyle={{
              marginTop: 20,
            }}
          />
        </View>
      </ScrollView>
      <FloatingPlayer currSongId={currSongId} isPlaying={isPlaying} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  listContainer: {
    flex: 1,
    height: 380,
  },
  scrollContainer: {
    flex: 1,
  },
  recommendedTextContainer: {
    paddingHorizontal: 20,
  },
  songList: {
    flex: 1,
    marginLeft: 20,
  },
  recommendedText: {
    color: colors.primary['100'],
    fontSize: sizes[8],
    fontFamily: fontFamily.JakartaSemiBold,
  },
});
