import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import Session from '../Actions/Session';



const Login = (props) => {

        return(
            <View>
                <Button title="Login con facebook" onPress={() => props.userLogin()} />
            </View>
        );
}

const mapStateToProps = state => {
    return { ...state.Session }
};

const { userLogin } = Session.creators;

export default connect(mapStateToProps, {
    userLogin
})(Login);