import React from 'react';
import { TouchableOpacity, ViewStyle, useColorScheme } from 'react-native';
import { getButtonCircleStyles } from './ButtonCircle.styles';

type ButtonProps = {
    onPress: () => void;
    type: 'System' | 'Accent';
    state: 'Enabled' | 'Pressed' | 'Disabled';
    styleType: 'Filled' | 'Subtle';
    icon?: React.ReactNode;
};
  
const ButtonCircle: React.FC<ButtonProps> = ({ onPress, type, state, styleType, icon }) => {
  const theme = useColorScheme() || 'light';
  // getButtonCircleStyles'dan hem stil hem de ikon rengini al
  const { buttonStyle, iconColor } = getButtonCircleStyles(theme, type, state, styleType);

  return (
    <TouchableOpacity 
      style={buttonStyle as ViewStyle}
      onPress={onPress} 
      disabled={state === 'Disabled'}
    >
      {/* İkon rengini dinamik olarak ayarla */}
      {icon && React.cloneElement(icon as React.ReactElement, { fill: iconColor })}
    </TouchableOpacity>
  );
};

export default ButtonCircle;
