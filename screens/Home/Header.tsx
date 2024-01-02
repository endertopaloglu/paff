import React from 'react';
import { getColors } from '../../src/styles/colors';
import { View, Text } from 'react-native';
import { distances, systemSizes } from '../../src/styles/sizes';
import { typography } from '../../src/styles/typography';
import ButtonCircle from '../../src/components/Buttons/ButtonCircle';
import Button from '../../src/components/Buttons/Button';
import { BellIcon, MegaphoneIcon } from '../../assets/icons/icons';

const Header = () => {
    const colors = getColors();
    const typo = typography();

  return (
    <View style={{backgroundColor:colors.Bg_white}}>
        <View style={{ backgroundColor:colors.Main_Adaptive_light, paddingTop:systemSizes.ios_safeTop, paddingHorizontal:distances._20, paddingVertical:distances._16, flexDirection:"row", justifyContent:"space-between", }}>
            <Text style={typo.h3_Bold}>Paribu</Text>
            <View style={{flexDirection:"row"}}>
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
    </View>
  );
};

export default Header;