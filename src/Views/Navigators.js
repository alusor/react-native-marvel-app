import React, { Component } from 'react';
import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Splash from './Splash';

const MainNavigator = createStackNavigator({
    Splash
});


export default MainNavigator;