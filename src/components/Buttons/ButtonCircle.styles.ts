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

  let backgroundColor, borderColor, textColor;

  if (type === 'System') {
    backgroundColor = colors.System_Solid_strong;
  } else if (type === 'Accent') {
    backgroundColor = colors.Main_Solid_light;
  }

  if (styleType === 'Subtle') {
    backgroundColor = 'transparent';
    borderColor = textColor;
  }

  if (state === 'Disabled') {
    backgroundColor = colors.Disabled_Background;
    textColor = colors.Disabled_Content;
  }

  return {
    buttonStyle: {
      backgroundColor,
      padding: distances._8,
      borderRadius: radius._full,
    }
  };
};
