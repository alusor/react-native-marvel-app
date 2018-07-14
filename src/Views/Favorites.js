import React from 'react';
import styled from 'styled-components';
import { Title, Content, ComicCard, Text, Copy } from '../Components/UtilComponents';
import { ScrollView, Linking, Button } from 'react-native';
import Container from '../Components/Container'; 
import Header from '../Components/Header';

const View = styled.View``;

const Favorites = (props) => (
    <Container>
            <Header title='Favoritos' />
                <Content>
                   
                </Content>
                <Copy>Data provided by Marvel. © 2014 Marvel</Copy>
            </Container>
);
export default Favorites;