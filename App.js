import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import WelcomeScreen from './screens/welcomeScreen'
import HomeScreen from './screens/homeScreen'
import ExchangeScreen from './screens/exchangeScreen'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import {AppTabNavigator} from './component/appTabNavigator';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';



export default class App extends React.Component {
  render(){
    return(
      <AppContainer/>
    )
  }
}
const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  BottomTab: {screen: AppTabNavigator},
})
const AppContainer=createAppContainer(switchNavigator);


