import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import styled from 'styled-components';

const Safe = styled(SafeAreaView)`
    background-color: #b50f16;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    flex-direction: row;
`;
const Title = styled.Text`
    color: white;
    height: 44px;
    font-family: "Poppins-Bold";
    font-size: 20px;
    text-align: center;
    flex: 1

`;


export default (props) => (
    <Safe
        forceInset={{top: 'always'}}
        style={{  
        }}
    >
        <StatusBar  barStyle="light-content" />
        <Title>{props.title}</Title>  
    </Safe>


);