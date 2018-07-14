import React from 'react';
import styled from 'styled-components';

const ComicCard = styled.ImageBackground`
width: 150px;
height: 250px;
margin: 5px;
border-radius: 6px;

`;

const Title = styled.Text`
    color: white;
    font-family: "Poppins-Bold";
    font-size: 18px;
`;
const Content = styled.View`
    margin-horizontal: 15px;
    flex: 1;
`;

export {
    Title,
    Content,
    ComicCard
};