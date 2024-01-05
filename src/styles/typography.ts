import { StyleSheet } from 'react-native';
import { getColors } from '@styles/colors';

export const typography = () => {
  const colors = getColors();

  const baseFontStyle = StyleSheet.create({
    h1: {
      fontSize: 48,
      lineHeight: 60,
      letterSpacing: -1,
      fontFamily: "Inter-Regular",
      color: colors.Foreground_primary,
    },
    h2: {
      fontSize: 40,
      lineHeight: 48,
      letterSpacing: -0.75,
      fontFamily: "Inter-Regular",
      color: colors.Foreground_primary,
    },
    h3: {
      fontSize: 32,
      lineHeight: 40,
      letterSpacing: -0.5,
      fontFamily: "Inter-Regular",
      color: colors.Foreground_primary,
    },
    h4: {
      fontSize: 24,
      lineHeight: 32,
      letterSpacing: -0.25,
      fontFamily: "Inter-Regular",
      color: colors.Foreground_primary,
    },
    h5: {
      fontSize: 20,
      lineHeight: 24,
      letterSpacing: -0.25,
      fontFamily: "Inter-Regular",
      color: colors.Foreground_primary,
    },
    //Body
    bodyMedium:{
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: -0.1,
      fontFamily: "Inter-Regular",
      color: colors.Foreground_primary,
    },
    bodySmall:{
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0,
      fontFamily: "Inter-Regular",
      color: colors.Foreground_primary,
    },
    bodyXsmall:{
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0,
      fontFamily: "Inter-Regular",
      color: colors.Foreground_primary,
    },
    //Button
    buttonMedium:{
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: -0.1,
      fontFamily: "Inter-Regular",
      textAlign:"center",
      color: colors.Foreground_white,
    },
  });

  // Tüm stilleri StyleSheet ile oluşturun
  const styles = StyleSheet.create({
    ...baseFontStyle,
    //Font bold
  h1_Bold: {
    ...baseFontStyle.h1,
    fontFamily: "Inter-SemiBold", 
  },
  h2_Bold: {
    ...baseFontStyle.h2,
    fontFamily: "Inter-SemiBold", 
  },
  h3_Bold: {
    ...baseFontStyle.h3,
    fontFamily: "Inter-SemiBold",
  },
  h4_Bold: {
    ...baseFontStyle.h4,
    fontFamily: "Inter-SemiBold",
  },
  h5_Bold: {
    ...baseFontStyle.h5,
    fontFamily: "Inter-SemiBold",
  },
  bodyMedium_Bold: {
    ...baseFontStyle.bodyMedium,
    fontFamily: "Inter-SemiBold",
    fontWeight:"600",
  },
  bodySmall_Bold: {
    ...baseFontStyle.bodySmall,
    fontFamily: "Inter-Medium",
  },
  bodyXsmall_Bold: {
    ...baseFontStyle.bodyXsmall,
    fontFamily: "Inter-Medium",
  },
  });

  return styles;
};
