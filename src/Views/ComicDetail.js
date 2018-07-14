import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ScrollView, View } from 'react-native';
import Container from '../Components/Container'; 
import Header from '../Components/Header';
import { Title, Content, ComicCard } from '../Components/UtilComponents';


const ComicDetail = (props) => {
    const { comic } = props;
    return (
            <Container>
            <Header leftAction={() => props.navigation.goBack()} left color='transparent' />
                <Content>   
                    <View style={{ flexDirection: 'row' }}>
                    <Title>{comic.title}</Title>
                    <ComicCard source={{ uri: `${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}} />
                    </View>
                </Content>
            </Container>
        );
};

const mapStateToProps = state => {
    return {
        comic: state.Comics.selectedComic
    };
};

export default connect(mapStateToProps)(ComicDetail);