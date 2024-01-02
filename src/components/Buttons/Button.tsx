import React from 'react';
import { TouchableOpacity, Text, useColorScheme } from 'react-native';
import { getButtonStyles } from './Button.styles';

type ButtonProps = {
    title: string;
    onPress: () => void;
    type: 'System' | 'Accent';
    state: 'Enabled' | 'Pressed' | 'Disabled';
    styleType: 'Filled' | 'Subtle';
};
  
const Button: React.FC<ButtonProps> = ({ title, onPress, type, state, styleType }) => {
  const theme = useColorScheme() || 'light';
  const styles = getButtonStyles(theme, type, state, styleType);

  return (
    <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={onPress} 
      disabled={state === 'Disabled'}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;