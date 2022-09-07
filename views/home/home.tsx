import { useTheme } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from '../../components/switch/switch';
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
      <Box style={{ margin: theme.spacing.m }}>
        <Button title='Movies' onPress={() => navigation.navigate('Movies')} />
      </Box>
      <Box style={{ flex: 1 }}>
        {/* <Text style={{ color: theme.colors.mainForeground }}>
          Above the switch.
        </Text> */}
        <Switch x={0} y={0} size={theme.spacing.x4l} />
        {/* <Text style={{ color: theme.colors.mainForeground }}>
          Below the switch.
        </Text> */}
      </Box>
    </SafeAreaView>
  );
};
