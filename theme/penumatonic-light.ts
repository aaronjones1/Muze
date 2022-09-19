import theme, { palette, Theme } from './pneumatonic';

const lightTheme: Theme = {
  ...theme,
  isDarkMode: false,
  colors: {
    ...theme.colors,
    mainBackground: palette.gray_800,
    mainForeground: palette.gray_50,
    placeholderText: palette.gray_300,
    headerBackground: palette.gray_800,
    borderColor: palette.gray_700,
    cursorColor: palette.gray_300,
  },
};

export default lightTheme;