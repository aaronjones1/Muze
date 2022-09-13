import { useTheme } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Pressable, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MuzeLogo } from '../../components/muze-logo/muze-logo';
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
      <Box style={{ alignSelf: 'center' }}>
        <MuzeLogo color={theme.colors.mainForeground} />
      </Box>
      <Text
        style={[theme.textVariants.subheader, {
          color: theme.colors.mainForeground,
          alignSelf: 'center',
          margin: theme.spacing.s,
        }]}
      >
        Welcome to Muze ✨
      </Text>
      <Box style={{ margin: theme.spacing.m }}>
        <Pressable
          onPress={() => navigation.navigate('Movies')}
          style={{
            borderRadius: theme.borderRadii.full,
            backgroundColor: theme.colors.mainForeground,
            padding: theme.spacing.s,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={[theme.textVariants.body, { color: theme.colors.mainBackground }]}>Movies</Text>
        </Pressable>
      </Box>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='height'>
        <Box flex={1} flexShrink={0}>
          <TextInput
            style={[
              theme.textVariants.body,
              {
                flexShrink: 0,
                color: theme.colors.mainForeground,
                margin: theme.spacing.m,
                paddingHorizontal: theme.spacing.m,
                paddingVertical: theme.spacing.s,
                borderWidth: 1,
                borderRadius: theme.borderRadii.full,
                borderColor: theme.colors.borderColor,
              },
            ]}
            cursorColor={theme.colors.cursorColor}
            placeholder='Type'
            placeholderTextColor={theme.colors.placeholderText}
          ></TextInput>
        </Box>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
