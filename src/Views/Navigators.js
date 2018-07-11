import React, { Component } from 'react';
import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Comics from './ComicsView';
import ComicDetail from './ComicDetail';
import Account from './Account';
import Favorites from './Favorites';
import { Image } from 'react-native';

const comic = require('../Icons/comic.png');

const ComicsNavigator = createStackNavigator({
    Comics,
    ComicDetail
});
const HerosNavigator = createStackNavigator({
    ComicDetail
});

ComicsNavigator.navigationOptions = {
    tabBarLabel: 'Comics',
    tabBarIcon: ({tintColor}) => (
        <Image style={{ tintColor: 'white', width: 24, height: 24 }} source={ comic }/>
    )
}

HerosNavigator.navigationOptions = {
    tabBarLabel: 'Heroes',
}

const Tab = createBottomTabNavigator({
    ComicsNavigator,
    HerosNavigator,
    Account,
    Favorites
}, {
    tabBarOptions: {
        style: {
            backgroundColor: '#f0141e',
        },
        labelStyle: {
            color: 'white',
            fontFamily: 'Poppins-Regular'
        },
        showIcon: true
    }
});

export default Tab;