import React from 'react';
import Container from '../Components/Container';
import { Button } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Session from '../Actions/Session';
import {AnimatedLogo} from './Splash/Splash.styled';

const Icon = require('../Icons/applogo.png');

const Image = styled.Image`
    width: 128px;
    height: 128px;
    margin-bottom: 30px;
    align-self: center;
`;

const Login = (props) => {
        const logo = props.loading? <AnimatedLogo /> : <Button color='#f0141e' title="Login con facebook" onPress={() => props.userLogin()} />;
        return(
            <Container style={{ justifyContent: 'center', paddingHorizontal: 15, }} >
                <Image resizeMode='contain' source={Icon}/>
                
                {logo}
            </Container>
        );
}

const mapStateToProps = state => {
    return { ...state.Session }
};

const { userLogin } = Session.creators;

export default connect(mapStateToProps, {
    userLogin
})(Login);