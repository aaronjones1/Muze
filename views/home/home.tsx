import { useTheme } from '@shopify/restyle';
import { Button, Image, Text, View } from 'react-native';
import { Theme } from '../../theme/pneumatonic';

interface HomeComponentProps {
  navigation
}

export default function HomeComponent({ navigation }) {
  const theme = useTheme<Theme>();

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.mainBackground}}>
      <Image
        source={require('../../assets/muzelogo.png')}
        style={{ width: 40, height: 40, marginBottom: 40 }}
      />
      <Text style={{color: theme.colors.mainForeground}}>Welcome to Muze ✨</Text>
      <Button title='Movies' onPress={() => navigation.navigate('Movies')} />
    </View>
  );
}