import React from 'react';
import { TouchableOpacity, Text, useColorScheme } from 'react-native';
import { getButtonCircleStyles } from './ButtonCircle.styles';

type ButtonProps = {
    title: string;
    onPress: () => void;
    type: 'System' | 'Accent';
    state: 'Enabled' | 'Pressed' | 'Disabled';
    styleType: 'Filled' | 'Subtle';
};
  
const Button: React.FC<ButtonProps> = ({ title, onPress, type, state, styleType }) => {
  const theme = useColorScheme() || 'light';
  const styles = getButtonCircleStyles(theme, type, state, styleType);

  return (
    <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={onPress} 
      disabled={state === 'Disabled'}
    >
    </TouchableOpacity>
  );
};

export default Button;