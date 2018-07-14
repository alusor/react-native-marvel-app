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
const Copy = styled.Text`
    color: white;
    font-family: "Poppins-Regular";
    font-size: 10px;
    text-align: center;
`;
const Content = styled.View`
    margin-horizontal: 15px;
    flex: 1;
`;
const Text = styled.Text`
    color: white;
    font-family: "Poppins-Regular";
    font-size: 16px;
`;
const Button = styled.TouchableOpacity`
    background-color: #f0141e;
    font-size: 16px;
    border-radius: 4px;
    elevation: 1;
    justify-content: center;
    align-items: center;
    padding: 8px;
`;
const ButtonText = styled.Text`
    color: white;
    font-family: "Poppins-Bold";
    font-size: 16px;
`;
export {
    Title,
    Content,
    ComicCard,
    Text,
    Copy,
    Button,
    ButtonText
};