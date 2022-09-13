import {
  Box,
  BoxShadow,
  Canvas,
  FitBox,
  Group,
  mix,
  rect,
  rrect,
  runTiming,
  useComputedValue,
  useTouchHandler,
  useValue,
} from '@shopify/react-native-skia';
import { View } from 'react-native';
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
  const margin = theme.spacing.m;
  const pressed = useValue(0);
  const timingDuration = 60;
  const onTouch = useTouchHandler({
    onEnd: () => {
      runTiming(pressed, pressed.current === 1 ? 0 : 1, {
        duration: timingDuration,
      });
    },
  });

  const xTranslationDistance = 26;
  const transform = useComputedValue(
    () => [{ translateX: mix(pressed.current, 0, xTranslationDistance) }],
    [pressed]
  );

  return (
    <Canvas onTouch={onTouch} style={{ flex: 1 }}>
      <FitBox src={source} dst={rect(x + margin, y + margin, size, size)}>
        <Box box={border} color={theme.colors.mainForeground} />
        <Box box={surface} color={theme.colors.mainBackground}>
          <BoxShadow dx={0} dy={3} blur={3} color='black' inner />
        </Box>
        <Group transform={transform}>
          <Box box={dot} color={theme.colors.mainForeground}>
            <BoxShadow dx={0} dy={3} blur={3} color='black' />
          </Box>
        </Group>
      </FitBox>
    </Canvas>
  );
};
