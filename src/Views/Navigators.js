import React, { Component } from 'react';
import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Comics from './ComicsView';
import ComicDetail from './ComicDetail';

const MainNavigator = createStackNavigator({
    Comics,
    ComicDetail
});


export default MainNavigator;