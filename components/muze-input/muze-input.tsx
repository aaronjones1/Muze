import { useTheme } from '@shopify/restyle';
import { TextInput, View } from 'react-native';
import { Theme } from '../../theme/pneumatonic';

export const MuzeInput = () => {
  const theme = useTheme<Theme>();

  return (
    <View style={{ flex: 1, flexShrink: 0 }}>
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
    </View>
  );
};
