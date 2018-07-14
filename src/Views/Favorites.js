import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ComicCard, Copy } from '../Components/UtilComponents';
import { FlatList } from 'react-native';
import Container from '../Components/Container'; 
import Card from '../Components/ComicCard';
import { AnimatedLogo } from './Splash/Splash.styled';
import Header from '../Components/Header';
import Comics from '../Actions/Comics';

const Favorites = (props) => {
    console.log(props);
    renderItem = ({item, index}) => {
        return (
            <Card delay={index}>
                <ComicCard imageStyle={{ borderRadius: 6 }} source={{uri: `${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}}>
                    <Touchable onPress={() => props.selectComic(item)}>
                        <Text numberOfLines={2} key={index} >{item.title}</Text>
                    </Touchable>
                </ComicCard>
            </Card>
        )};
    keyExtractor = (item, index) => `${index}${item.id}`;
    renderFooter = () => props.loading? <AnimatedLogo />: false;
    return (
    <Container>
            <Header title='Favoritos' />
            <FlatList
                        data={props.favorites}
                        renderItem={renderItem}
                        extraData={props}
                        contentContainerStyle={{ paddingBottom: 35, justifyContent: 'center', alignItems: 'center'}}
                        style={{flex: 1 }}
                        keyExtractor={keyExtractor}
                        numColumns={2}
                        style={{ paddingTop: 20 }}
                        onEndReachedThreshold={1}
                        onEndReached={() => console.log('cargar mas')}
                        ListEmptyComponent={() => <Text style={{ textAlign: 'center' }}>Aún no tienes favoritos, que esperas!</Text>}
                        ListFooterComponent={renderFooter}
                    />
                <Copy>Data provided by Marvel. © 2014 Marvel</Copy>
            </Container>
)};

const mapStateToProps = state => ({
    favorites: state.Comics.favorites,
    loading: state.Comics.loading
});
const { selectComic } = Comics.creators;
export default connect(mapStateToProps, { selectComic })(Favorites);
const Touchable = styled.TouchableOpacity`
background-color: rgba(0,0,0,0.5);
flex: 1;
justify-content: flex-end;
border-radius: 6px;
`;
const Text = styled.Text`
font-size: 20;
margin: 20px;
font-family: 'Poppins-Bold';
color: white;
`;