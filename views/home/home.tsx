import { useTheme } from '@shopify/restyle';
import { Button, Image, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../theme/pneumatonic';
import Box from '../../theme/pneumatonic-box';

interface HomeProps {
  navigation: any;
}

export const HomeComponent = ({ navigation }: HomeProps) => {
  const theme = useTheme<Theme>();
  const logoSize = theme.spacing.x2l;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}
    >
      <StatusBar
        style={theme.isDarkMode ? 'light' : 'dark'}
        backgroundColor={theme.colors.mainBackground}
      />
      <Image
        source={require('../../assets/muzelogo.png')}
        style={{
          width: logoSize,
          height: logoSize,
          margin: theme.spacing.l,
          alignSelf: 'center',
          tintColor: theme.colors.mainForeground,
        }}
      />
      <Text
        style={{
          color: theme.colors.mainForeground,
          alignSelf: 'center',
          margin: theme.spacing.s,
        }}
      >
        Welcome to Muze ✨
      </Text>
      {/* <Text
        style={{
          color: theme.colors.mainForeground,
          alignSelf: 'center',
          margin: theme.spacing.s,
        }}
      >
        (Dark mode is {theme.isDarkMode ? 'on' : 'off'}.)
      </Text> */}
      <Box style={{ margin: theme.spacing.m }}>
        <Button title='Movies' onPress={() => navigation.navigate('Movies')} />
      </Box>
    </SafeAreaView>
  );
};
