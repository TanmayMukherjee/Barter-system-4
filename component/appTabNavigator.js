import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/homeScreen';
import ExchangeScreen from '../screens/exchangeScreen';
import {AppStackNavigator} from './appStackNavigator';

export const AppTabNavigator = createBottomTabNavigator({
   HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/homescreen.jpg")} style={{ width: 20, height: 20 }} />,
            tabBarLabel: "Home Screen",
        }
        
    },
    ExchangeScreen: {
        screen: ExchangeScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/exchangescreen.jpg")} style={{ width: 20, height: 20 }} />,
            tabBarLabel: "Exchange Screen",
        }
        
    }
})