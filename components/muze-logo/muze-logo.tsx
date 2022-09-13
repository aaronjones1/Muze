import Svg, { Path, Rect } from 'react-native-svg';

interface MuzeLogoProps {
  color: string;
}

export const MuzeLogo = ({ color }: MuzeLogoProps) => {
  return (
    <Svg width='40' height='40' viewBox='0 0 40 40' fill='none'>
      <Path
        d='M0 10C0 4.47715 4.47715 0 10 0H30C34.3708 0 38.0866 2.80411 39.4467 6.71147C39.8003 7.39721 40 8.17529 40 9V13H28V10H26V13H14V10H12V40H10C4.47715 40 0 35.5228 0 30V10Z'
        fill={color}
      />
      <Path
        d='M14 15V26H19.5714L14 29V40H30C35.5228 40 40 35.5228 40 30V29H34L40 26V15H14Z'
        fill={color}
      />
    </Svg>
  );
};
