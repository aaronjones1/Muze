import theme, { palette, Theme } from './pneumatonic';

const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.gray_900,
    mainForeground: palette.gray_50,
  },
};

export default darkTheme;