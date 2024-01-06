import { StyleSheet, TextStyle } from 'react-native';
import { getColors } from '@styles/colors';

export const typography = (): { [key: string]: TextStyle } => {
  const colors = getColors();

  const mainFontStyle = (
    fontSize: number, 
    lineHeight: number, 
    letterSpacing: number, 
    fontFamily: string = "Inter-Regular", 
    color: string = colors.Foreground_primary
  ): TextStyle => ({
    fontSize,
    lineHeight,
    letterSpacing,
    fontFamily,
    color,
  });

  const baseFontStyle = StyleSheet.create({
    h1: mainFontStyle(48, 60, -1 ),
    h2: mainFontStyle(40, 48, -0.75),
    h3: mainFontStyle(32, 40, -0.5),
    h4: mainFontStyle(24, 32, -0.25),
    h5: mainFontStyle(20, 24, -0.25),
    bodyMedium: mainFontStyle(16, 24, -0.1),
    bodySmall: mainFontStyle(14, 20, 0),
    bodyXsmall: mainFontStyle(12, 16, 0),
    buttonMedium: {
      ...mainFontStyle(16, 24, -0.1, "Inter-Regular", colors.Foreground_white),
      textAlign: "center",
    },
  });

  const createBoldStyle = (
    baseStyle: TextStyle, 
    fontFamily: string = "Inter-SemiBold", 
    fontWeight: string | null = null
  ): TextStyle => ({
    ...baseStyle,
    fontFamily,
  });

  const styles = StyleSheet.create({
    ...baseFontStyle,
    h1_Bold: createBoldStyle(baseFontStyle.h1),
    h2_Bold: createBoldStyle(baseFontStyle.h2),
    h3_Bold: createBoldStyle(baseFontStyle.h3),
    h4_Bold: createBoldStyle(baseFontStyle.h4),
    h5_Bold: createBoldStyle(baseFontStyle.h5),
    bodyMedium_Bold: createBoldStyle(baseFontStyle.bodyMedium, "Inter-SemiBold", "600"),
    bodySmall_Bold: createBoldStyle(baseFontStyle.bodySmall, "Inter-Medium"),
    bodyXsmall_Bold: createBoldStyle(baseFontStyle.bodyXsmall, "Inter-Medium"),
  });

  return styles;
};
