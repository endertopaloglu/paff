// globalStyles.js
import { StyleSheet } from 'react-native';

const baseFontStyle = {
  //Title
  h1: {
    fontSize: 48,
    lineHeight: 60,
    letterSpacing: -1,
    fontFamily: "Inter-Regular",
  },
  h2: {
    fontSize: 40,
    lineHeight: 48,
    letterSpacing: -0.75,
    fontFamily: "Inter-Regular",
  },
  h3: {
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.5,
    fontFamily: "Inter-Regular",
  },
  h4: {
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.25,
    fontFamily: "Inter-Regular",
  },
  h5: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.25,
    fontFamily: "Inter-Regular",
  },
  //Body
  bodyMedium:{
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.1,
    fontFamily: "Inter-Regular",
  },
  bodySmall:{
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
    fontFamily: "Inter-Regular",
  },
  bodyXsmall:{
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
    fontFamily: "Inter-Regular",
  },
};

export const globalStyles = StyleSheet.create({
  ...baseFontStyle,
  //Font bold
  h1Bold: {
    ...baseFontStyle.h1,
    fontFamily: "Inter-SemiBold", 
  },
  h2Bold: {
    ...baseFontStyle.h2,
    fontFamily: "Inter-SemiBold", 
  },
  h3Bold: {
    ...baseFontStyle.h3,
    fontFamily: "Inter-SemiBold",
  },
  h4Bold: {
    ...baseFontStyle.h4,
    fontFamily: "Inter-SemiBold",
  },
  h5Bold: {
    ...baseFontStyle.h5,
    fontFamily: "Inter-SemiBold",
  },
  bodyMediumBold: {
    ...baseFontStyle.bodyMedium,
    fontFamily: "Inter-SemiBold",
    fontWeight:"600",
  },
  bodySmallBold: {
    ...baseFontStyle.bodySmall,
    fontFamily: "Inter-Medium",
  },
  bodyXsmallBold: {
    ...baseFontStyle.bodyXsmall,
    fontFamily: "Inter-Medium",
  },
});