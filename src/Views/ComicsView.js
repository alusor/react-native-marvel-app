import React, {Component} from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Comics from '../Actions/Comics';
import Container from '../Components/Container';
import Header from '../Components/Header';
import Card from '../Components/ComicCard';
import { AnimatedLogo } from './Splash/Splash.styled';
import { ComicCard } from '../Components/UtilComponents';


class ComicsView extends Component {
    componentDidMount() {
        const getComics = this.props.getComicsRequested;
        getComics();

      }
    navigate(item) {
        this.props.selectComic(item);
        //this.props.navigation.navigate('ComicDetail');

    }
    renderItem = ({item, index}) => {
        return (
            <Card delay={index}>
                <ComicCard imageStyle={{ borderRadius: 6 }} source={{uri: `${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}}>
                    <Touchable onPress={this.navigate.bind(this,item)}>
                        <Text numberOfLines={2} key={index} >{item.title}</Text>
                    </Touchable>
                </ComicCard>
            </Card>
        )};
    keyExtractor = (item, index) => `${index}${item.id}`;
    renderFooter = () => this.props.loading? <AnimatedLogo />: false;
    render() {
        return (
                
                <Container>
                    <Header title='Marvel Universe'/>
                    <FlatList
                        data={this.props.comics}
                        renderItem={this.renderItem}
                        extraData={this.props}
                        contentContainerStyle={{ paddingBottom: 35, justifyContent: 'center', alignItems: 'center'}}
                        style={{flex: 1 }}
                        keyExtractor={this.keyExtractor}
                        numColumns={2}
                        style={{ paddingTop: 20 }}
                        onEndReachedThreshold={1}
                        onEndReached={() => console.log('cargar mas')}
                        ListFooterComponent={this.renderFooter}
                    />
                </Container>
        );
    }
}
  const mapStateToProps = state => {
    return {
        ...state.Comics
    }
  }
const { getComicsRequested } = Comics.creators;
const { selectComic } = Comics.creators;
export default connect(mapStateToProps, { 
    getComicsRequested,
    selectComic
 })(ComicsView);


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