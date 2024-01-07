import React from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, Image, NativeSyntheticEvent, NativeScrollEvent, Appearance } from 'react-native';
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
    backgroundColor: "rgba(255, 255, 255, 0.20)",
    marginHorizontal: 4,
  },
  paginationDotActive: {
    width: 12,
    height: 4,
    backgroundColor: '#8FA63C',
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
    title: 'Anında alın ve satın',
    description: 'Tek tıkla 100’den fazla kripto varlığı kolayca alıp satabilirsiniz.',
    image: theme === 'dark'
      ? require('@assets/banner/kolay_alsat_dark.png')
      : require('@assets/banner/kolay_alsat.png'),
    link: 'Kolay al/sat',
  },
  {
    title: 'Piyasaları keşfedin',
    description: "Paribu'da listelenen 100'den fazla kripto varlıkla işlem yapabilirsiniz. ",
    image: theme === 'dark'
      ? require('@assets/banner/piyasalar_dark.png')
      : require('@assets/banner/piyasalar.png'),
    link: 'Piysalara git',
  },
  // More slides...
];

const SnapContainer = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const colors = getColors();
  const typo = typography();

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIndex = Math.floor(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(newIndex);
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
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeIndex ? styles.paginationDotActive : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default SnapContainer;

