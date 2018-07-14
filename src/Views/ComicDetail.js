import React from 'react';
import {connect} from 'react-redux';
import { ScrollView, View, Linking, Button, TouchableOpacity, Share } from 'react-native';
import Container from '../Components/Container'; 
import Header from '../Components/Header';
import { Title, Content, ComicCard, Text, Copy } from '../Components/UtilComponents';
import Icon from 'react-native-vector-icons/Ionicons';

function share(title, url) {
    Share.share({
        message: `${title}\n${url}`,
        title: 'Compartir'
    });
};  

const ComicDetail = (props) => {
    const { comic } = props;
    console.log(comic);
    return (
            <Container>
            <Header leftAction={() => props.navigation.goBack()} left color='transparent' />
                <Content>
                    <ScrollView>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 5 }}>
                            <Title>{comic.title}</Title>
                            <View style={{ flex: 1 , flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around', padding: 10 }}>
                                <TouchableOpacity>
                                <Icon size={30} color='#f0141e' name='md-heart' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => share(comic.title,comic.urls[0].url)}>
                                <Icon size={30} color='#f0141e' name='md-share' />
                                </TouchableOpacity>
                            </View>
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