import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { getColors } from '@styles/coreStyles';
import Header from './Header';
import Banner from './Banner';
import HomeWallet from './HomeWallet';

const Home = () => {
  const colors = getColors();
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: colors.Bg_grayLight,
      flex: 1,
    }
  });

  return (
    <ScrollView style={styles.mainContainer}>
        <Header />
        <Banner />
        <HomeWallet />
    </ScrollView>
  );
};

export default Home;