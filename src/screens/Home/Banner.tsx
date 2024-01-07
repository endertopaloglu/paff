import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, Image, Animated, NativeSyntheticEvent, NativeScrollEvent, Appearance } from 'react-native';
import { getColors, typography, distances, radius } from '@styles/coreStyles';
import ButtonLink from '@components/Buttons/ButtonLink';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    paddingBottom: 14,
  },
  slide: {
    width: width,
    paddingHorizontal: distances._20,
    paddingVertical: distances._12,
    flexDirection: "row",
  },
  content: {
    flex: 1,
    marginBottom: 12,
  },
  image: {
    width: 96,
    height: 96,
  },
  paginationDot: {
    height: 4,
    width: 4,
    borderRadius: radius._full,
    backgroundColor: "rgba(143, 166, 60, 1)",
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: "rgba(143, 166, 60, 1)",
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const theme = Appearance.getColorScheme();
// Dummy data for carousel
const slides = [
  {
    title: 'Piyasaları keşfedin',
    description: "Paribu'da listelenen 100'den fazla kripto varlıkla işlem yapabilirsiniz. ",
    image: theme === 'dark'
      ? require('@assets/banner/piyasalar_dark.png')
      : require('@assets/banner/piyasalar.png'),
    link: 'Piysalara git',
  },
  {
    title: 'Anında alın ve satın',
    description: 'Tek tıkla 100’den fazla kripto varlığı kolayca alıp satabilirsiniz.',
    image: theme === 'dark'
      ? require('@assets/banner/kolay_alsat_dark.png')
      : require('@assets/banner/kolay_alsat.png'),
    link: 'Kolay al/sat',
  },
  {
    title: 'Sinyalleri kaçırmayın',
    description: 'Piyasalar için alarm kurarak anlık fiyat değişimlerini öğrenebilirsiniz.',
    image: theme === 'dark'
      ? require('@assets/banner/alarm_kur_dark.png')
      : require('@assets/banner/alarm_kur.png'),
    link: 'Alarm kur',
  },
  {
    title: 'İşlemlerinizi takip edin',
    description: 'Onay bekleyen ve gerçeklemiş tüm işlemlerinizi inceleyebilirsiniz.',
    image: theme === 'dark'
      ? require('@assets/banner/islem_takip_dark.png')
      : require('@assets/banner/islem_takip.png'),
    link: 'İşlem geçmişine git',
  },
  {
    title: 'Düşük bakiyeleri değerlendirin',
    description: 'Değeri 10 TL ve altındaki varlıklarınızı dönüştürebilirsiniz.',
    image: theme === 'dark'
      ? require('@assets/banner/donustur_dark.png')
      : require('@assets/banner/donustur.png'),
    link: 'Şimdi dönüştür',
  }
  // More slides...
];

const SnapContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const colors = getColors();
  const typo = typography();
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    scrollX.setValue(offsetX);
    const newIndex = Math.floor(offsetX / width);
    setActiveIndex(newIndex);
  };

  const paginationDotWidth = (index: number) => {
    return scrollX.interpolate({
      inputRange: [
        width * (index - 1),
        width * index,
        width * (index + 1)
      ],
      outputRange: [4, 12, 4],
      extrapolate: 'clamp'
    });
  };

  // Yeni eklenen opaklık animasyon fonksiyonu
  const paginationDotOpacity = (index: number) => {
    return scrollX.interpolate({
      inputRange: [
        width * (index - 1),
        width * index,
        width * (index + 1)
      ],
      outputRange: [0.5, 1, 0.5],
      extrapolate: 'clamp'
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.Adaptive_grayMedium }]}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <View style={styles.content}>
              <View style={{height:60, marginBottom:6,}}>
                <Text style={[typo.bodyCompactMedium_Bold, { color: colors.Foreground_primary, marginBottom: 2 }]}>{slide.title}</Text>
                <Text style={[typo.bodyCompactSmall, { color: colors.Foreground_secondary }]}>{slide.description}</Text>
              </View>
              <ButtonLink text={slide.link} />
            </View>
            <Image source={slide.image} style={styles.image} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.paginationContainer}>
        {slides.map((_, index) => (
          <Animated.View
            key={index}
            style={[
              styles.paginationDot,
              { 
                width: paginationDotWidth(index),
                opacity: paginationDotOpacity(index) // Opaklık animasyonu
              }
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default SnapContainer;

