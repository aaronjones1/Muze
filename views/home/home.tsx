import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function HomeComponent({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/muzelogo.png')}
        style={{ width: 40, height: 40, marginBottom: 40 }}
      />
      <Text>Welcome to Muze ✨</Text>
      <Button title='Movies' onPress={() => navigation.navigate('Movies')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
