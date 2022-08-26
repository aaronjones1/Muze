import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import darkTheme from './theme/penumatonic-dark';
import theme from './theme/pneumatonic';
import HomeComponent from './views/home/home';
import MoviesComponent from './views/movies/movies';

const Stack = createNativeStackNavigator();

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeComponent} />
          <Stack.Screen name='Movies' component={MoviesComponent} />
        </Stack.Navigator>
        <StatusBar style='auto' />
      </NavigationContainer>
    </ThemeProvider>
  );
}

