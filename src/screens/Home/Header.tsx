import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getColors } from '@styles/colors';
import { distances, radius, systemSizes } from '@styles/sizes';
import { typography } from '@styles/typography'
import { BellIcon, MegaphoneIcon } from '@icons/icons';
import ButtonCircle from '@components/Buttons/ButtonCircle';

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
      <View style={{ margin: distances._20 }}>
        <TouchableOpacity style={{
          paddingVertical: distances._16,
          paddingHorizontal: distances._12,
          backgroundColor: colors.System_Solid_strong,
          borderRadius: radius._6,
        }}>
          <Text style={typo.buttonMedium}>
            I'm a primary button
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;