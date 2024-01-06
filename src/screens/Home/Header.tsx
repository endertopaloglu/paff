import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getColors, distances, radius, systemSizes, typography } from '@styles/coreStyles';
import { BellIcon, MegaphoneIcon } from '@icons/icons';
import ButtonCircle from '@components/Buttons/ButtonCircle';
import Button from '@components/Buttons/Button';

const Header = () => {
  const colors = getColors();
  const typo = typography();


  return (
    <View style={{ backgroundColor: colors.Bg_white, flex: 1 }}>
      <View style={{ backgroundColor: colors.Main_Adaptive_light, paddingTop: systemSizes.ios_safeTop, paddingHorizontal: distances._20, paddingVertical: distances._16, flexDirection: "row", justifyContent: "space-between", }}>
        <Text style={typo.h3_Bold}>Paribu</Text>
        <View style={{ flexDirection: "row" }}>
          <ButtonCircle
            onPress={() => console.log('Button pressed')}
            type="System"
            state="Enabled"
            styleType="Subtle"
            icon={<BellIcon width={20} height={20} />}
          />
          <ButtonCircle
            onPress={() => console.log('Button pressed')}
            type="System"
            state="Enabled"
            styleType="Subtle"
            icon={<MegaphoneIcon width={20} height={20} />}
          />
        </View>
      </View>
      <View style={{ margin: distances._20, }}>
        <Button> I'm a primary button </Button>
      </View>
    </View>
  );
};

export default Header;