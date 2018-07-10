/**

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <LinearGradient colors={['#1E3744', '#1E5372']} style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Poppins-Bold',
    color: '#95CA3E'
  },
  instructions: {
    textAlign: 'center',
    color: '#e2e2e2',
    marginBottom: 5,
  },
});
*/

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Main from './src/Views/Navigators';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}