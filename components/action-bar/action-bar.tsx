import { Canvas, SkFont, Text } from '@shopify/react-native-skia';
import { View } from 'react-native';

interface ActionBarProps {
  font: SkFont | null;
  fontSize: number;
}

export const ActionBar = ({ font, fontSize }: ActionBarProps) => {
  if (font === null) {
    return null;
  } else {
    return (
      <Canvas style={{ flex: 1 }}>
        <Text text='This is the action bar.' font={font} y={fontSize} />
      </Canvas>
    );
  }
};
