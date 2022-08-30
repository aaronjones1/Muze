import theme, { palette, Theme } from './pneumatonic';

const darkTheme: Theme = {
  ...theme,
  isDarkMode: true,
  colors: {
    ...theme.colors,
    mainBackground: palette.gray_800,
    mainForeground: palette.gray_50,
    headerBackground: palette.gray_800,
  },
};

export default darkTheme;