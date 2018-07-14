import React from 'react';
import styled from 'styled-components';
import Session from '../Actions/Session';
import Container from '../Components/Container'
import Header from '../Components/Header';
import { connect } from 'react-redux';
import { Content, ButtonText, Button } from '../Components/UtilComponents';


const Text = styled.Text`
    color: white;
    font-family: "Poppins-Bold";
    font-size: 20px;
    text-align: center;
`;

const Profile = styled.Image`
    height: 128;
    width: 128; align-self: center;
    border-radius: 64px;
    margin: 30px;
`;  
const Bottom = styled.View`
    flex: 1;
    justify-content: center;
    margin-bottom: 30px;
`;

const Account = (props) => {
    const { _user } = props.user.user; 
    return (
    <Container >
        <Header title='Perfil'/>
        <Content>
        <Profile source={{ uri: props.user.getImage }}/>
        <Text>{_user.displayName}</Text>
        <Bottom>
            <Button onPress={() => props.userLogout()}>
                <ButtonText>Cerrar sesión</ButtonText>
            </Button>
        </Bottom>
        </Content>
    </Container>
)};

const mapStateToProps = state => ({
    ...state.Session
});

const {userLogout} = Session.creators;
export default connect(mapStateToProps, {
    userLogout
})(Account);