import React from 'react';
import Container from '../Components/Container';
import { View } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Session from '../Actions/Session';
import {AnimatedLogo} from './Splash/Splash.styled';
import { Copy, Button, Text } from '../Components/UtilComponents';

const Icon = require('../Icons/applogo.png');

const Image = styled.Image`
    width: 128px;
    height: 128px;
    margin-bottom: 50px;
    align-self: center;
`;

const Login = (props) => {
        const logo = props.loading? <AnimatedLogo /> : <Button onPress={() => props.userLogin()}><Text>Comenzar</Text></Button>;
        return(
            <Container >
                <View style={{ justifyContent: 'center', flex: 1, paddingHorizontal: 15,  }}>
                    <Image resizeMode='contain' source={Icon}/>
                    
                    {logo}
                </View>
                <Copy>Data provided by Marvel. © 2014 Marvel</Copy>

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