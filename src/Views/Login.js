import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import Session from '../Actions/Session';



class Login extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return(
            <View>
                <Button title="Login con facebook" onPress={() => this.props.userLogin()} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { ...state.Session }
};

const { userLogin } = Session.creators;

export default connect(mapStateToProps, {
    userLogin
})(Login);