import React, { Component } from 'react';
import { createTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Comics from './ComicsView';
import ComicDetail from './ComicDetail';
import Account from './Account';
import Favorites from './Favorites';
import { Image } from 'react-native';

const comic = require('../Icons/comic.png');
const hero = require('../Icons/heros.png');
const favorites = require('../Icons/favorites.png');
const account = require('../Icons/account.png');

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
        <Image style={{ tintColor, width: 24, height: 24 }} source={ comic }/>
    )
}

HerosNavigator.navigationOptions = {
    tabBarLabel: 'Heroes',
    tabBarIcon: ({tintColor}) => (
        <Image style={{ tintColor, width: 24, height: 24 }} source={ hero }/>
    )
}

const Tab = createTabNavigator({
    ComicsNavigator,
    HerosNavigator,
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
    tabBarOptions: {
        style: {
            backgroundColor: '#f0141e',
        },
        labelStyle: {
            color: 'white',
            fontFamily: 'Poppins-Regular'
        },
        activeTintColor: 'white',
        inactiveTintColor: '#a2a2a2',
        showIcon: true
    }
});

export default Tab;