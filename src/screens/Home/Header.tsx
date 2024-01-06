import React from 'react';
import { View, StyleSheet } from 'react-native';
import { getColors, distances } from '@styles/coreStyles';
import { BellIcon, MegaphoneIcon } from '@icons/icons';
import ButtonIcon from '@components/Buttons/ButtonIcon';
import Logo from '@assets/Logo.svg';

const Header = () => {
  const colors = getColors();

  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: colors.Bg_white,
      flex: 1,
    },
    headerContainer: {
      backgroundColor: colors.Adaptive_grayMedium,
      paddingHorizontal: distances._20,
      paddingTop: 70,
      paddingBottom: distances._16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }
  });

  return (
    <View>
      <View style={styles.headerContainer}>
        <Logo width={120} height={24} />
        <View style={{ flexDirection: "row" }}>
          <ButtonIcon icon={<BellIcon />} type='subtle' />
          <ButtonIcon icon={<MegaphoneIcon />} style={{ marginLeft: distances._12 }} type='subtle' />
        </View>
      </View>
    </View>
  );
};

export default Header;