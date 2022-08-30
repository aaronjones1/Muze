import { createBox, createText, createTheme } from '@shopify/restyle';

export const palette = {
  gray_50: '#F2F2F2',
  gray_100: '#E6E6E6',
  gray_200: '#CCCCCC',
  gray_300: '#B3B3B3',
  gray_400: '#999999',
  gray_500: '#808080',
  gray_600: '#666666',
  gray_700: '#4D4D4D',
  gray_800: '#333333',
  gray_900: '#1A1A1A',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.gray_50,
    mainForeground: palette.gray_900,
  },
  spacing: {
    x3s: 1,
    x2s: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    x2l: 40,
    x3l: 48,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    title: {
      fontFamily: 'Roboto',
      fontWeight: '100',
      fontSize: 42,
      lineHeight: 49,
    },
    header: {
      fontFamily: 'Roboto',
      fontWeight: '900',
      fontSize: 24,
      lineHeight: 28,
    },
    subheader: {
      fontFamily: 'Roboto',
      fontWeight: '300',
      fontSize: 21,
      lineHeight: 25,
    },
    body: {
      fontFamily: 'Roboto',
      fontSize: 16,
      lineHeight: 19,
    },
    label: {
      fontFamily: 'Roboto',
      fontWeight: '900',
      fontSize: 14,
      lineHeight: 18,
    },
  },
});

export type Theme = typeof theme;
export default theme;
