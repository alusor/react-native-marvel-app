import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Splash from './Splash/Splash';
import Comics from './ComicsView';
import ComicDetail from './ComicDetail';
import Account from './Account';
import Favorites from './Favorites';
import { Image } from 'react-native';

const comic = require('../Icons/comic.png');
const favorites = require('../Icons/favorites.png');
const account = require('../Icons/account.png');

const ComicsNavigator = createStackNavigator({
    Comics,
    ComicDetail
}, {
    headerMode: 'none'
});


ComicsNavigator.navigationOptions = {
    tabBarLabel: 'Comics',
    tabBarIcon: ({tintColor}) => (
        <Image style={{ tintColor, width: 24, height: 24 }} source={ comic }/>
    )
}
const Tab = createBottomTabNavigator({
    ComicsNavigator,
    favorites: { screen: Favorites, navigationOptions: {
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({tintColor}) => (
            <Image style={{ tintColor, width: 24, height: 24 }} source={ favorites }/>
        )
    } },
    profile: { screen: Account, navigationOptions: {
        tabBarLabel: 'Perfil',
        tabBarIcon: ({tintColor}) => (
            <Image style={{ tintColor, width: 24, height: 24 }} source={ account }/>
        )
    } },
    
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        style: {
            backgroundColor: '#f0141e',
            elevation: 3
        },
        labelStyle: {
            color: 'white',
            fontFamily: 'Poppins-Regular',
            fontSize: 10,
            margin: 0
        },
        activeTintColor: 'white',
        inactiveTintColor: 'rgba(255,255,255,0.7)',
        showIcon: true,
        indicatorStyle: { height: 0 }
    }
});

const MainStack = createStackNavigator({
    Splash,
    Tab
}, {
    headerMode: 'none'
});

export default Tab;