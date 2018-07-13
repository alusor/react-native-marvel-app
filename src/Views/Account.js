import React from 'react';
import styled from 'styled-components';
import Container from '../Components/Container'
import { connect } from 'react-redux';

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

const Account = (props) => {
    const { _user } = props.user.user; 
    return (
    <Container>
        <Profile source={{ uri: props.user.getImage }}/>
        <Text>{_user.displayName}</Text>
    </Container>
)};
const mapStateToProps = state => ({
    ...state.Session
});

export default connect(mapStateToProps)(Account);