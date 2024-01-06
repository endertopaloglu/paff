import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';

// Button Props Tip Tanımı
interface ButtonProps {
  size?: 'large' | 'medium' | 'small';
  children: React.ReactNode;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({ size = 'medium', children, style }) => {
  let buttonStyle: ViewStyle;

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
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  largeButton: {
    padding: 20,
    backgroundColor: 'blue',
  },
  mediumButton: {
    padding: 15,
    backgroundColor: 'blue',
  },
  smallButton: {
    padding: 10,
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  } as TextStyle
});

export default Button;
