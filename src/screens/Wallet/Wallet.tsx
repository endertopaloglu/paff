import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { getColors } from '@styles/coreStyles';

const Wallet = () => {
  const colors = getColors();
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: colors.Bg_grayLight,
      flex: 1,
    }
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>Wallet</Text>
    </SafeAreaView>
  );
};

export default Wallet;