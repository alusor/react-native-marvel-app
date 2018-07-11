import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import styled from 'styled-components';

const Safe = styled(SafeAreaView)`
    background-color: #f0141e;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    padding-top: ${ Platform.OS === 'android'? 12: 0 };
    flex-direction: row;
    justify-content: center;
    align-items: center;
    elevation: 3;
`;
const Title = styled.Text`
    color: white;
    height: 44px;
    font-family: "Poppins-Bold";
    font-size: 20px;
    text-align: center;
    
`;

export default (props) => (
    <Safe>
        <StatusBar barStyle="light-content" />
        <Title>{props.title}</Title>  
    </Safe>
);