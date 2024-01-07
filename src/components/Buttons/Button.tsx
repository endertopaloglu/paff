import React from 'react';
import { TouchableOpacity, Text, TextStyle, ViewStyle } from 'react-native';
import { distances, typography, getColors, radius } from '@styles/coreStyles';

// Button Props Tip Tanımı
interface ButtonProps {
  size?: 'large' | 'medium' | 'small';
  type?: 'filled' | 'subtle' | 'ghost';
  children: React.ReactNode;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({ size = 'large', type = "filled", children, style }) => {
  const { buttonMedium } = typography();

  // Ortak stil özellikleri
  const commonStyle: ViewStyle = {
    paddingHorizontal:distances._16,
    justifyContent:"center",
    borderRadius:radius._6,
  };

  // Size'a göre stil belirleme
  let buttonStyle: ViewStyle = {};
  switch (size) {
    case 'large':
      buttonStyle = {
        height:48,
      };
      break;
    case 'small':
      buttonStyle = {
        height:40,
      };
      break;
    default:
      buttonStyle = {
        height:32,
      };
  }

  // Type'a göre stil belirleme
  let buttonTypeStyle: ViewStyle = {};
  let textStyle: TextStyle = {};
  switch (type) {
    case 'subtle':
      buttonTypeStyle = {
        backgroundColor: getColors().System_Adaptive_light,
      };
      textStyle = {
        color: getColors().Foreground_primary,
      };
      break;
    case 'ghost':
      buttonTypeStyle = {
        backgroundColor: 'transparent',
      };
      textStyle = {
        color: getColors().Foreground_primary,
      };
      break;
    default: // 'filled'
      buttonTypeStyle = {
        backgroundColor: getColors().System_Solid_strong,
      };
      textStyle = {
        color: getColors().Foreground_white,
      };
  }
  
  return (
    <TouchableOpacity style={[commonStyle, buttonStyle, buttonTypeStyle, style]}>
    <Text style={[buttonMedium, textStyle]}>{children}</Text>
  </TouchableOpacity>
  );
};

export default Button;
