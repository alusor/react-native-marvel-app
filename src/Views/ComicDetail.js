import React from 'react';
import {connect} from 'react-redux';
import { ScrollView, View, Linking, Button } from 'react-native';
import Container from '../Components/Container'; 
import Header from '../Components/Header';
import { Title, Content, ComicCard, Text, Copy } from '../Components/UtilComponents';


const ComicDetail = (props) => {
    const { comic } = props;
    console.log(comic);
    return (
            <Container>
            <Header leftAction={() => props.navigation.goBack()} left color='transparent' />
                <Content>
                    <ScrollView>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Title>{comic.title}</Title>
                            
                            <Button color='#f0141e' title='Visitar sitio' onPress={() => Linking.openURL(comic.urls[0].url)} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <ComicCard source={{ uri: `${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}} />
                        </View>
                    </View>
                    <Text>{comic.description}</Text>

                    </ScrollView>
                </Content>
                <Copy>Data provided by Marvel. © 2014 Marvel</Copy>
            </Container>
        );
};

const mapStateToProps = state => {
    return {
        comic: state.Comics.selectedComic
    };
};

export default connect(mapStateToProps)(ComicDetail);