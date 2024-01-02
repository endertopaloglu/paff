import { StyleSheet } from 'react-native';

//Colors
export const lightColors = {
    Bg_white: "#FFFFFF",
    Bg_grayLight: "#F9FAFB",
    Bg_grayMedium: "#F0F2F5",
    Bg_grayStrong: "#ECEDF0",
    Bg_fixWhite: "#FFFFFF",

    Adaptive_grayLight: "rgba(31, 34, 41, 0.02)",
    Adaptive_grayMedium: "rgba(31, 34, 41, 0.04)",
    Adaptive_grayStrong: "rgba(31, 34, 41, 0.08)",
    Adaptive_grayBold: "rgba(31, 34, 41, 0.10)",

    Overlay_gray_light:"rgba(0, 0, 0, 0.30)",
    Overlay_gray_medium:"rgba(0, 0, 0, 0.60)",
    Overlay_gray_strong:"rgba(0, 0, 0, 0.80)",

    Foreground_primary:"#1F2229",
    Foreground_secondary:"rgba(31, 34, 41, 0.80)",
    Foreground_tertiary:"rgba(31, 34, 41, 0.60)",
    Foreground_accent:"#8FA63C",
    Foreground_danger:"#DB4F58",
    Foreground_warning:"#D97706",
    Foreground_white:"#FFFFFF",
    Foreground_fix_white:"#FFFFFF",

    Stroke_light:"rgba(31, 34, 41, 0.10)",
    Stroke_medium:"rgba(31, 34, 41, 0.10)",
    Stroke_strong:"rgba(31, 34, 41, 0.20)",
    Stroke_bold:"rgba(31, 34, 41, 0.40)",
    Stroke_accent:"#8FA63C",
    Stroke_danger:"#DB4F58",
    Stroke_warning:"#F59E0B",
    Stroke_fix_white:"#FFFFFF",

    System_Solid_strong:"#1F2229",
    System_Solid_medium:"#434954",
    System_Solid_light:"#5A6170",
    System_Adaptive_light:"rgba(31, 34, 41, 0.04)",
    System_Adaptive_medium:"rgba(31, 34, 41, 0.08)",
    System_Adaptive_strong:"rgba(31, 34, 41, 0.15)",

    Main_Solid_strong:"#8FA63C",
    Main_Solid_medium:"#728530",
    Main_Solid_light:"#566424",
    Main_Adaptive_light:"rgba(143, 166, 60, 0.10)",
    Main_Adaptive_medium:"rgba(143, 166, 60, 0.20)",
    Main_Adaptive_strong:"rgba(143, 166, 60, 0.30)",

    Success_Solid_strong:"#8FA63C",
    Success_Solid_medium:"#70842C",
    Success_Solid_light:"#556526",
    Success_Adaptive_light:"rgba(143, 166, 60, 0.10)",
    Success_Adaptive_medium:"rgba(143, 166, 60, 0.20)",
    Success_Adaptive_strong:"rgba(143, 166, 60, 0.30)",

    Warning_Solid_strong:"#F59E0B",
    Warning_Solid_medium:"#D97706",
    Warning_Solid_light:"#92400E",
    Warning_Adaptive_light:"rgba(251, 191, 36, 0.10)",
    Warning_Adaptive_medium:"rgba(251, 191, 36, 0.20)",
    Warning_Adaptive_strong:"rgba(251, 191, 36, 0.30)",

    Danger_Solid_strong:"#DB4F58",
    Danger_Solid_medium:"#C83646",
    Danger_Solid_light:"#8D2436",
    Danger_Adaptive_light:"rgba(219, 79, 88, 0.10)",
    Danger_Adaptive_medium:"rgba(219, 79, 88, 0.20)",
    Danger_Adaptive_strong:"rgba(219, 79, 88, 0.30)",

    Disabled_Background:"rgba(31, 34, 41, 0.08)",
    Disabled_Content:"rgba(31, 34, 41, 0.30)",
    Disabled_Stroke:"rgba(31, 34, 41, 0.10)",

    //Utilities
    segmentActive:"#FFFFFF",
  };

  export const darkColors = {
    Bg_white: "#181A20",
    Bg_grayLight: "#1F2229",
    Bg_grayMedium: "#2D3138",
    Bg_grayStrong: "#434954",
    Bg_fixWhite: "#FFFFFF",

    Adaptive_grayLight: "rgba(255, 255, 255, 0.02)",
    Adaptive_grayMedium: "rgba(255, 255, 255, 0.04)",
    Adaptive_grayStrong: "rgba(255, 255, 255, 0.08)",
    Adaptive_grayBold: "rgba(255, 255, 255, 0.15)",

    Overlay_gray_light:"rgba(0, 0, 0, 0.50)",
    Overlay_gray_medium:"rgba(0, 0, 0, 0.70)",
    Overlay_gray_strong:"rgba(0, 0, 0, 0.90)",

    Foreground_primary:"#FFFFFF",
    Foreground_secondary:"rgba(255, 255, 255, 0.80)",
    Foreground_tertiary:"rgba(255, 255, 255, 0.50)",
    Foreground_accent:"#8BAB49",
    Foreground_danger:"#DB4F58",
    Foreground_warning:"#F59E0B",
    Foreground_white:"#1F2229",
    Foreground_fix_white:"#FFFFFF",

    Stroke_light:"rgba(255, 255, 255, 0.06)",
    Stroke_medium:"rgba(255, 255, 255, 0.10)",
    Stroke_strong:"rgba(255, 255, 255, 0.20)",
    Stroke_bold:"rgba(255, 255, 255, 0.40)",
    Stroke_accent:"#8BAB49",
    Stroke_danger:"#DB4F58",
    Stroke_warning:"#F59E0B",
    Stroke_fix_white:"#FFFFFF",

    System_Solid_strong:"#F9FAFB",
    System_Solid_medium:"#D1D3DA",
    System_Solid_light:"#BFC4CF",
    System_Adaptive_light:"rgba(255, 255, 255, 0.04)",
    System_Adaptive_medium:"rgba(255, 255, 255, 0.08)",
    System_Adaptive_strong:"rgba(255, 255, 255, 0.15)",

    Main_Solid_strong:"#8BAB49",
    Main_Solid_medium:"#9EBA61",
    Main_Solid_light:"#B9CE88",
    Main_Adaptive_light:"rgba(139, 171, 73, 0.10)",
    Main_Adaptive_medium:"rgba(139, 171, 73, 0.20)",
    Main_Adaptive_strong:"rgba(139, 171, 73, 0.30)",

    Success_Solid_strong:"#8FA63C",
    Success_Solid_medium:"#ACC15A",
    Success_Solid_light:"#C5D482",
    Success_Adaptive_light:"rgba(143, 166, 60, 0.10)",
    Success_Adaptive_medium:"rgba(143, 166, 60, 0.20)",
    Success_Adaptive_strong:"rgba(143, 166, 60, 0.30)",

    Warning_Solid_strong:"#F59E0B",
    Warning_Solid_medium:"#FBBF24",
    Warning_Solid_light:"#FCD34D",
    Warning_Adaptive_light:"rgba(251, 191, 36, 0.10)",
    Warning_Adaptive_medium:"rgba(251, 191, 36, 0.20)",
    Warning_Adaptive_strong:"rgba(251, 191, 36, 0.30)",

    Danger_Solid_strong:"#DB4F58",
    Danger_Solid_medium:"#E98387",
    Danger_Solid_light:"#F1B0B1",
    Danger_Adaptive_light:"rgba(219, 79, 88, 0.10)",
    Danger_Adaptive_medium:"rgba(219, 79, 88, 0.20)",
    Danger_Adaptive_strong:"rgba(219, 79, 88, 0.30)",

    Disabled_Background:"rgba(255, 255, 255, 0.08)",
    Disabled_Content:"rgba(255, 255, 255, 0.20)",
    Disabled_Stroke:"rgba(255, 255, 255, 0.02)",

    //Utilities
    segmentActive:"rgba(255, 255, 255, 0.10)",
  };
  