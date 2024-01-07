import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { distances, typography } from '@styles/coreStyles';
import ChevronRight from '@assets/icons/chevron_right.svg'


interface ButtonLinkProps {
  text: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ text }) => {
  const typo = typography();
  return (
    <View style={styles.button}>
      <Text style={typo.bodySmall_Bold}>{text}</Text>
      <ChevronRight style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height:24,
  },
  icon: {
    width: 16,
    height: 16,
    marginLeft:distances._4,
  },
});

export default ButtonLink;
