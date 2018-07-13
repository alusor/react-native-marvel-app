import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Container from '../../Components/Container';
import { AnimatedLogo } from './Splash.styled';
class Splash extends Component {
    
    async componentDidMount() {
        const enabled = await firebase.messaging().hasPermission();
        if(!enabled) {
            try {
                await firebase.messaging().requestPermission();
                // User has authorised
            } catch (error) {
                // User has rejected permissions
            }
        }
    }
    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content" />
                <AnimatedLogo/>
            </Container>
        );    
    }
    
};

export default connect()(Splash);