import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { getColors } from '@styles/coreStyles';

const EasyBuySell = () => {
  const colors = getColors();
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: colors.Bg_grayLight,
      flex: 1,
    }
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>EasyBuySell</Text>
    </SafeAreaView>
  );
};

export default EasyBuySell;