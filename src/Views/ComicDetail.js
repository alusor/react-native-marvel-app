import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import { View } from 'react-native';
import Container from '../Components/Container'; 
import Header from '../Components/Header';

const ComicDetail = (props) => {
    return (
        <View style={{ flex:1 }}>
            <Header leftAction={() => props.navigation.goBack()} left color='black' title={props.comic.title} />
            <Container>
            </Container>
        </View>
        );
};

const mapStateToProps = state => {
    return {
        comic: state.Comics.selectedComic
    };
};

export default connect(mapStateToProps)(ComicDetail);