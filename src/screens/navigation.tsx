import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { distances, getColors, systemSizes } from '@styles/coreStyles';
import { HomeIcon, HomeIconFilled, PiyasalarIcon, PiyasalarIconFilled, WalletIcon, WalletIconFilled, EasyBuyySellIcon, EasyBuyySellIconFilled, AccountIcon, AccountIconFilled } from '@icons/icons';
import Home from '@screens/Home/Home';
import Markets from '@screens/Markets/Markets';
import Wallet from '@screens/Wallet/Wallet';
import EasyBuySell from '@screens/EasyBuySell/EasyBuySell';
import Account from '@screens/Account/Account';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    const colors = getColors();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, focused, size }) => {
                        let IconComponent;
                        if (route.name === "Home") {
                            IconComponent = focused ? HomeIconFilled : HomeIcon;
                        } else if (route.name === "Markets") {
                            IconComponent = focused ? PiyasalarIconFilled : PiyasalarIcon;
                        } else if (route.name === "Wallet") {
                            IconComponent = focused ? WalletIconFilled : WalletIcon;
                        } else if (route.name === "EasyBuySell") {
                            IconComponent = focused ? EasyBuyySellIconFilled : EasyBuyySellIcon;
                        } else if (route.name === "Account") {
                            IconComponent = focused ? AccountIconFilled : AccountIcon;
                        }
                        const iconColor = focused ? colors.Main_Solid_light : colors.Foreground_primary;
                        return IconComponent ? <IconComponent width={size} height={size} fill={iconColor} /> : null;
                    },
                    tabBarStyle: {
                        backgroundColor:colors.Bg_white,
                        borderTopColor:colors.Stroke_medium,
                        paddingBottom:36,
                        height:84,
                        paddingTop:14,
                    },
                    tabBarLabelStyle: {
                        paddingTop: 8,
                    },
                    tabBarActiveTintColor:colors.Foreground_primary,
                    tabBarInactiveTintColor:colors.Foreground_tertiary,
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Markets" component={Markets} />
                <Tab.Screen name="Wallet" component={Wallet} />
                <Tab.Screen name="EasyBuySell" component={EasyBuySell} />
                <Tab.Screen name="Account" component={Account} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
