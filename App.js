import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from './src/store';
import Main from './src/Views/Navigators';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

const AppRx = reduxifyNavigator(Main,'root');
const mapStateToProps = (state) => ({
  state: state.Navigations,
});
const AppWithNavigationState = connect(mapStateToProps)(AppRx);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState/>
      </Provider>
    );
  }
}