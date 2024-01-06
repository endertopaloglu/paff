import React from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, Image, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { getColors, typography, distances } from '@styles/coreStyles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: width,
    paddingHorizontal: distances._20,
    paddingVertical: distances._12,
    flexDirection:"row",
  },
  content: {
    flex:1,
  },
  image: {
    width: 96,
    height: 96,
  },
  paginationDot: {
    height: 10,
    aspectRatio: 1,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: '#007bff',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Dummy data for carousel
const slides = [
  {
    title: 'Anında alın ve satın',
    description: 'Tek tıkla 100’den fazla kripto varlığı kolayca alıp satabilirsiniz.',
    image: require('@assets/icon.png'), // Replace with your own image
  },
  {
    title: 'Anında alın ve satın',
    description: 'Tek tıkla 100’den fazla kripto varlığı kolayca alıp satabilirsiniz.',
    image: require('@assets/icon.png'), // Replace with your own image
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
    <View style={styles.container}>
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
              <Text style={[typo.bodyMedium_Bold, {color:colors.Foreground_primary}]}>{slide.title}</Text>
              <Text style={[typo.bodySmall, {color:colors.Foreground_secondary}]}>{slide.description}</Text>
              <Text>Kolay al/sat</Text>
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

