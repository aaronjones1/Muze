import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Switch } from 'react-native';
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
  // const fontSize = theme.textVariants.body.fontSize;
  // const inter_400 = useFont(require('./assets/fonts/Inter-Regular.ttf'), fontSize);

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
              }}
            >
              <Stack.Screen name='Home' component={HomeComponent} />
              <Stack.Screen name='Movies' component={MoviesComponent} />
            </Stack.Navigator>
            <StatusBar style='auto' />
          </NavigationContainer>
          <Text color='mainForeground' variant='body'>
            Some text.
          </Text>
          <Box>
            <Switch
              value={darkMode}
              onValueChange={(value: boolean) => setDarkMode(value)}
            />
          </Box>
        </Box>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

