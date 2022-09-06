import { Box, Canvas, FitBox, rect, rrect } from '@shopify/react-native-skia';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/pneumatonic';

const borderRadius = 24;
const width = 50;
const source = rect(0, 0, width, borderRadius);
const border = rrect(source, borderRadius, borderRadius);
const surface = rrect(
  rect(1, 1, width - 2, borderRadius - 2),
  borderRadius,
  borderRadius
);
const dot = rrect(rect(3, 3, 18, 18), 18, 18);

interface SwitchProps {
  x: number;
  y: number;
  size: number;
  //   pressed: SkiaValue<Number>;
}

export const Switch = ({ x, y, size }: SwitchProps) => {
  const theme = useTheme<Theme>();

  return (
    <Canvas>
      <FitBox src={source} dst={rect(x, y, size, size)}>
        <Box box={border} color={theme.colors.mainForeground} />
        <Box box={surface} color={theme.colors.mainBackground} />
        <Box box={dot} color={theme.colors.mainForeground} />
      </FitBox>
    </Canvas>
  );
};
