import React from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Container from '../../Components/Container';
import { AnimatedLogo } from './Splash.styled';
const Splash = () => {
    return (
        <Container>
            <StatusBar barStyle="light-content" />
            <AnimatedLogo/>
        </Container>
    );
};

export default connect()(Splash);