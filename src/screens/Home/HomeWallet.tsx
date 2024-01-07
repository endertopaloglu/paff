import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getColors, typography, distances } from '@styles/coreStyles';
import Eye from '@assets/icons/eye_open.svg';

const HomeWallet = () => {
    const colors = getColors();
    const typo = typography();

    const styles = StyleSheet.create({
        homeWalletContainer: {
            backgroundColor: colors.Bg_white,
            padding: distances._20,
        },
        walletValueContainer: {
            flexDirection:"row",
            alignItems:"center",
        },
        value: {
            ...typo.h5_Bold,
        },
        currency: {
            ...typo.h5_Bold,
            color:colors.Foreground_tertiary,
        },
        valueIcon: {
            marginLeft:distances._8,
        }
    });

    return (
        <View style={styles.homeWalletContainer}>
            <Text style={[typo.bodyXsmall, { color: colors.Foreground_tertiary }]}>
                Varlıklarınızın toplam değeri
            </Text>
            <View style={styles.walletValueContainer}>
                <Text style={styles.value}>
                    10,514.11
                </Text>
                <Text style={styles.currency}>
                    TL
                </Text>
                <Eye style={styles.valueIcon} fill={colors.Foreground_tertiary}/>
            </View>
        </View>
    );
};

export default HomeWallet;