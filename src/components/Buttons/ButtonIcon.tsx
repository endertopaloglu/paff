import React from 'react';
import { TouchableOpacity, ViewStyle, StyleProp } from 'react-native';
import { getColors, radius } from '@styles/coreStyles';
import PlaceHolder from '@icons/placeholder.svg';

interface IconProps {
  size?: 'large' | 'medium' | 'small';
  type?: 'filled' | 'subtle' | 'ghost';
  icon?: React.ReactElement;
  style?: StyleProp<ViewStyle>;
}

const ButtonIcon: React.FC<IconProps> = ({ 
  size = 'medium',
  type = 'filled', 
  icon = <PlaceHolder />,
  style,
}) => {
  // Ortak stil özellikleri
  const commonStyle: ViewStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius._full,
  };

  // Size'a göre stil belirleme
  let buttonStyle: ViewStyle = {};
  switch (size) {
    case 'large':
      buttonStyle = { height: 48, width: 48 };
      break;
    case 'small':
      buttonStyle = { height: 32, width: 32 };
      break;
    default:
      buttonStyle = { height: 40, width: 40 };
  }

  // Type'a göre arka plan stilini belirleme
  let buttonTypeStyle: ViewStyle = {};
  let iconColor: string = 'black'; // Default icon color
  switch (type) {
    case 'subtle':
      buttonTypeStyle = { backgroundColor: getColors().System_Adaptive_light };
      iconColor = getColors().Foreground_primary;
      break;
    case 'ghost':
      buttonTypeStyle = { backgroundColor: 'transparent' };
      iconColor = getColors().Foreground_primary;
      break;
    default: // 'filled' için
      buttonTypeStyle = { backgroundColor: getColors().System_Solid_strong };
      iconColor = getColors().Foreground_white;
      break;
  }

  // İkonu render etme
  const renderIcon = () => {
    return React.cloneElement(icon, { fill: iconColor, width:20, height:20 });
  };

  return (
    <TouchableOpacity style={[commonStyle, buttonStyle, buttonTypeStyle, style]}>
      {renderIcon()}
    </TouchableOpacity>
  );
};

export default ButtonIcon;
