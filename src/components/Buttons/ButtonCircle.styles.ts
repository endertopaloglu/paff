import { getColors } from '../../styles/colors';
import { distances, radius } from '../../styles/sizes';

type Theme = 'light' | 'dark';
type ButtonType = 'System' | 'Accent';
type ButtonState = 'Enabled' | 'Pressed' | 'Disabled';
type ButtonStyleType = 'Filled' | 'Subtle';

export const getButtonCircleStyles = (
  theme: Theme, 
  type: ButtonType, 
  state: ButtonState, 
  styleType: ButtonStyleType
) => {
  const colors = getColors();

  let backgroundColor, iconColor;

  if (type === 'System') {
    backgroundColor = colors.System_Solid_strong;
    iconColor = colors.Foreground_primary;
  } else if (type === 'Accent') {
    backgroundColor = colors.Main_Solid_light;
    iconColor = colors.Foreground_primary;
  }

  if (styleType === 'Subtle') {
    backgroundColor = colors.System_Adaptive_light;
    iconColor = colors.Foreground_primary;
  }

  if (state === 'Disabled') {
    backgroundColor = colors.Disabled_Background;
    iconColor = colors.Disabled_Content;
  }

  return {
    buttonStyle: {
      backgroundColor,
      padding: distances._8,
      borderRadius: radius._full,
      width:36,
      height:36,
      alignItems: 'center',
      justifyContent:'center',
    },
    iconColor
  };
};
