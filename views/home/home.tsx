import { useTheme } from '@shopify/restyle';
import { useState } from 'react';
import { Button, Image, StatusBar, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../theme/pneumatonic';

interface HomeProps {
  navigation: any;
}

function getStatusBarStyle(darkMode: boolean): 'light-content' | 'dark-content' {
  return darkMode ? 'light-content' : 'dark-content';
}

export const HomeComponent = ({ navigation }: HomeProps) => {
  const theme = useTheme<Theme>();
  const logoSize = theme.spacing.x2l;
  const buttonWidth = theme.spacing.x3l;
  const buttonHeight = theme.spacing.l; 

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}
    >
      <StatusBar
        barStyle={getStatusBarStyle(theme.isDarkMode)}
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
        Welcome to Muze ✨ {theme.isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Button title='Movies' onPress={() => navigation.navigate('Movies')} />
      {/* style={{ buttonWidth: buttonWidth, buttonHeight: buttonHeight }} */}
    </SafeAreaView>
  );
};
