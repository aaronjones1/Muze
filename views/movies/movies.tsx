import { Button, Text, View } from 'react-native';

export default function MoviesComponent({ navigation }) {
  return (
    <View>
      <Text>This is where the movies will go.</Text>
      <Button title='Home' onPress={() => { navigation.navigate('Home'); }} />
    </View>
  );
}
