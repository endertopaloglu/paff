import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { getColors } from '@styles/coreStyles';

const Markets = () => {
  const colors = getColors();
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: colors.Bg_grayLight,
      flex: 1,
    }
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>Markets</Text>
    </SafeAreaView>
  );
};

export default Markets;