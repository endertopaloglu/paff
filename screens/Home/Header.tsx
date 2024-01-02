import React from 'react';
import { getColors } from '../../src/styles/colors';
import { View, Text } from 'react-native';
import { distances, systemSizes } from '../../src/styles/sizes';
import { typography } from '../../src/styles/typography';
import { BellIcon } from '../../assets/icons/icons'

const Header = () => {
    const colors = getColors();
    const typo = typography();

  return (
    <View style={{backgroundColor:colors.Bg_white}}>
        <View style={{ backgroundColor:colors.Main_Adaptive_light, paddingTop:systemSizes.ios_safeTop, paddingHorizontal:distances._20, paddingVertical:distances._16 }}>
            <Text style={typo.h3_Bold}>Paribu</Text>
            <BellIcon width={30} height={30} />
        </View>
    </View>
  );
};

export default Header;