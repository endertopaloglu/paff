import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { distances, typography, radius, getColors } from '@styles/coreStyles';

// Button Props Tip Tanımı
interface ButtonProps {
  size?: 'large' | 'medium' | 'small';
  children: React.ReactNode;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({ size = 'medium', children, style }) => {
  let buttonStyle: ViewStyle;
  const typo = typography();

  switch (size) {
    case 'large':
      buttonStyle = styles.largeButton;
      break;
    case 'small':
      buttonStyle = styles.smallButton;
      break;
    default:
      buttonStyle = styles.mediumButton;
  }

  return (
    <TouchableOpacity style={[buttonStyle, style]}>
      <Text style={typo.buttonMedium}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  largeButton: {
    height:48,
    backgroundColor: "blue",
    paddingHorizontal:distances._16,
    justifyContent:"center",
    borderRadius:radius._6,
  },
  mediumButton: {
    padding: 15,
    backgroundColor: 'blue',
  },
  smallButton: {
    padding: 10,
    backgroundColor: 'blue',
  }
});

export default Button;
