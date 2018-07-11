import React, {Component} from 'react';
import { Animated, StyleSheet, Text, ActivityIndicator, FlatList, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Comics from '../Actions/Comics';
import Header from '../Components/Header';
import Card from '../Components/ComicCard';

class ComicsView extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
        this.state = {
            bounce: new Animated.Value(0),
            position: new Animated.Value(0)
        }
    }
    componentDidMount() {
        const getComics = this.props.getComicsRequested;
        getComics();

      }
    navigate(item) {
        this.props.navigation.navigate('ComicDetail');
    }
    renderItem = ({item, index}) => {
        return (
            <Card delay={index}>
                <ComicCard imageStyle={{ borderRadius: 6 }} source={{uri: `${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}}>
                    <Touchable onPress={this.navigate.bind(this,'hey')}>
                        <Text numberOfLines={2} key={index} style={styles.welcome}>{item.title}</Text>
                    </Touchable>
                </ComicCard>
            </Card>
        )};
    keyExtractor = (item, index) => `${index}${item.id}`;
    render() {
        return (
            <View style={{ flex:1 }}>
                <Header title='Marvel Universe'/>

            <LinearGradient colors={['#000', '#1e1e1e']} style={styles.container}>
                {this.props.loading? <ActivityIndicator />:null}
                <FlatList
                    data={this.props.comics}
                    renderItem={this.renderItem}
                    extraData={this.props}
                    keyExtractor={this.keyExtractor}
                    numColumns={2}
                    style={{ paddingTop: 20 }}
                    onEndReachedThreshold={1}
                    onEndReached={() => console.log('cargar mas')}
                />
            </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcome: {
      fontSize: 20,
      margin: 10,
      fontFamily: 'Poppins-Bold',
      color: 'white'
    },
    instructions: {
      textAlign: 'center',
      color: '#e2e2e2',
      marginBottom: 5,
    },
  });

  const mapStateToProps = state => {
    return {
        ...state.comics
    }
  }
const {getComicsRequested} = Comics.creators;
const { selectComic } = Comics.creators;
export default connect(mapStateToProps, { 
    getComicsRequested,
    selectComic
 })(ComicsView);

 const ComicCard = styled.ImageBackground`
    width: 150px;
    height: 250px;
    margin: 5px;
    border-radius: 6px;
    
 `;
 const Touchable = styled.TouchableOpacity`
    background-color: rgba(0,0,0,0.5);
    flex: 1;
    justify-content: flex-end;
    border-radius: 6px;
 `;