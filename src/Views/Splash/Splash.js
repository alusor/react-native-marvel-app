import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Container from '../../Components/Container';
import { AnimatedLogo } from './Splash.styled';
import firebase from 'react-native-firebase';
import  sesion from '../../Actions/Session';


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
        this.props.checkUserSesion();
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

const mapStateToProps = state => {
    return { ...state.Session }
};

const { checkUserSesion } = sesion.creators;

export default connect(mapStateToProps, { checkUserSesion })(Splash);