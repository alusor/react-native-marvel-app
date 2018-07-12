import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';


const Safe = styled(SafeAreaView)`
    background-color: ${props => props.color? props.color: '#f0141e'};
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    padding-top: ${ Platform.OS === 'android'? 12: 0 };
    elevation: 3;
`;
const Title = styled.Text`
    color: white;
    font-family: "Poppins-Bold";
    font-size: 20px;
    text-align: center;
    flex: 1;
`;
const Content = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 44px;
`;
const ActionContent = styled.View`
    width: 20%;
    height: 44px;
`;
const Action = styled.TouchableOpacity`
    height: 44px;
    width: 44px;
    justify-content: center;
    align-items: center;
`;
export default (props) => (
    <Safe color={props.color}>
        <StatusBar barStyle="light-content" />
        <Content>
            <ActionContent>
                {props.left? <Action onPress={props.leftAction}><Icon name="ios-arrow-back-outline" size={30} color="white" /></Action>: null}
            </ActionContent>
            <Title>{props.title}</Title>
            <ActionContent>
            </ActionContent>
        </Content>
    </Safe>
);