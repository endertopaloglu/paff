import React, { useCallback, useState } from 'react';
import { Text, View,Switch } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useGlobalStyles } from './src/styles/globalSytels';


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

  const styles = useGlobalStyles();
  const [isEnabled, setIsEnabled] = useState(false); // Switch için state
  const toggleSwitch = () => setIsEnabled(previousState => !previousState); // Switch'in durumunu değiştiren fonksiyon


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.h1_Bold}>Aşağı</Text>
      <Switch
        trackColor={{ false: "#FFFFFF", true: styles.switchActive.color }}
        thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
        ios_backgroundColor={styles.switchBackground.backgroundColor}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <StatusBar style="auto" />
    </View>
  );
};
