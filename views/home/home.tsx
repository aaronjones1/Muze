import { Button, Image, StyleSheet } from 'react-native';
import Box from '../../theme/pneumatonic-box';
import Text from '../../theme/pneumatonic-text';

export default function HomeComponent({ navigation }) {
  return (
    // <View style={styles.container}>
    <Box backgroundColor='mainBackground' style={{ height: '100%' }}>
      <Image
        source={require('../../assets/muzelogo.png')}
        style={{ width: 40, height: 40, marginBottom: 40 }}
      />
      <Text color='mainForeground'>Welcome to Muze ✨</Text>
      <Button title='Movies' onPress={() => navigation.navigate('Movies')} />
    </Box>
    // </View>
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
