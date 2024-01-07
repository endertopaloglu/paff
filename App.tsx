import React, { useCallback } from 'react';
import "react-native-gesture-handler"
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import Navigation from '@screens/navigation';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-BoldItalic': require('./assets/fonts/Inter-BoldItalic.ttf'),
    'Inter-Italic': require('./assets/fonts/Inter-Italic.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-MediumItalic': require('./assets/fonts/Inter-MediumItalic.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-SemiBoldItalic': require('./assets/fonts/Inter-SemiBoldItalic.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <Navigation />
    </View>
  );
}