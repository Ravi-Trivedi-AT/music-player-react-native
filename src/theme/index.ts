import {colors} from '../constants/colors';

export const LightTheme = {
  colors: {
    background: colors.primary['100'],
    text: colors.secondary['900'],
    primary: colors.primary['500'],
  },
};

export const DarkTheme = {
  colors: {
    background: colors.primary['900'],
    text: colors.primary['100'],
    primary: colors.primary['500'],
  },
};

export type ThemeType = typeof LightTheme;
