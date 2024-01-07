import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getColors, typography, distances, radius } from '@styles/coreStyles';

const Markets = () => {
    const colors = getColors();
    const typo = typography();
    // API'dan gelen veri yapısını temsil eden bir tip belirleyin
    const [data, setData] = useState<Record<string, any> | null>(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://paribu.com/ticker');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error('Veri çekme hatası:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const styles = StyleSheet.create({
        Container: {
            backgroundColor: colors.Bg_white,
            padding: distances._20,
            marginTop: distances._8,
        },
        TitleContainer: {
            flexDirection: "row",
            alignItems: "center",
        },
        Title: {
            ...typo.bodyMedium,
        },
        TitleDescription: {
            ...typo.bodySmall,
            color: colors.Foreground_tertiary,
            marginLeft: distances._4,
        },
        DataContainer: {
            marginTop: distances._8,
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',

        },
        DataBox: {
            ...typo.bodySmall,
            marginVertical: distances._4,
            marginHorizontal: 3,
            backgroundColor:colors.Adaptive_grayLight,
            padding:distances._12,
            width:"48%",
            borderRadius:radius._6,
            borderBlockColor:colors.Adaptive_grayLight,
        },
        DataBoxContent: {
            color:colors.Foreground_primary,
        }
    });

    return (
        <View style={styles.Container}>
            <View style={styles.TitleContainer}>
                <Text style={styles.Title}>
                    En yüksek hacimliler
                </Text>
                <Text style={styles.TitleDescription}>
                    (Son 24 saat)
                </Text>
            </View>
            <View style={styles.DataContainer}>
                {data && Object.keys(data).slice(0, 6).map((key, index) => (
                    <View style={styles.DataBox}>
                    <Text key={index} style={styles.DataBoxContent}>{key}: {data[key].last}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Markets;
