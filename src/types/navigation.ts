import {NavigatorScreenParams} from '@react-navigation/native';

export type RootNativeStackParamList = {
  Home: undefined;
  PlayerScreen: undefined;
  ListPdf: undefined;
  ViewPdf: undefined;
};

// Define types for the drawer navigator
export type DrawerParamList = {
  DrawerHome: NavigatorScreenParams<RootNativeStackParamList>;
  LikedSongs: undefined;
  Languages: undefined;
};
