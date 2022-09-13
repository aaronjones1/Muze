import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@shopify/restyle';
import {
  useFonts,
  Inter_100Thin,
  Inter_300Light,
  Inter_400Regular,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Switch } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import darkTheme from './theme/penumatonic-dark';
import theme from './theme/pneumatonic';
import Box from './theme/pneumatonic-box';
import Text from './theme/pneumatonic-text';
import { HomeComponent } from './views/home/home';
import MoviesComponent from './views/movies/movies';

const Stack = createNativeStackNavigator();

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const fontSize = theme.textVariants.body.fontSize;

  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_300Light,
    Inter_400Regular,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <SafeAreaProvider>
          <Box flex={1} flexDirection='column' backgroundColor='mainBackground'>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                  headerStyle: {
                    backgroundColor: darkMode
                      ? darkTheme.colors.headerBackground
                      : theme.colors.headerBackground,
                  },
                  headerTintColor: darkMode
                    ? darkTheme.colors.mainForeground
                    : theme.colors.mainForeground,
                  headerTitleStyle: {
                    fontFamily: theme.textVariants.subheader.fontFamily,
                  },
                }}
              >
                <Stack.Screen name='Home' component={HomeComponent} />
                <Stack.Screen name='Movies' component={MoviesComponent} />
              </Stack.Navigator>
              <StatusBar style={darkMode ? 'light' : 'dark'} />
            </NavigationContainer>
            <Box
              flexDirection='row'
              justifyContent='space-between'
              alignItems='center'
              flexShrink={0}
            >
              <Text
                color='mainForeground'
                variant='body'
                style={{ margin: theme.spacing.m }}
              >
                Dark Mode
              </Text>
              <Box style={{ margin: theme.spacing.m }}>
                <Switch
                  value={darkMode}
                  onValueChange={(value: boolean) => setDarkMode(value)}
                />
              </Box>
            </Box>
          </Box>
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}

