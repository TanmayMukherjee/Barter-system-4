import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/homeScreen';
import ExchangeScreen from '../screens/exchangeScreen';




export const AppStackNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false
        }
    },
   Exchange: {
        screen: ExchangeScreen,
        navigationOptions: {
            headerShown: false
        }
    },

},
   
);