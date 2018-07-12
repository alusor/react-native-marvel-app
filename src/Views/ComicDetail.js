import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View } from 'react-native';

const ComicDetail = (props) => {
    console.log(props);

    return (<View/>);
};

const mapStateToProps = state => {
    console.log(state);
    return {
        comic: state.Comics.selectedComic
    };
};

export default connect(mapStateToProps)(ComicDetail);