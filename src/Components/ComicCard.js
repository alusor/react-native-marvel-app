import React, { Component } from 'react';
import {Animated, Easing} from 'react-native';

export default class extends Component {
    state = {
        opacity: new Animated.Value(0),
        position: new Animated.Value(0),
    };
    componentDidMount() {
        Animated.parallel([
            Animated.timing(                  
                this.state.opacity,            
                {
                  toValue: 1,                   
                  duration: 1000,    
                  delay: 100 * this.props.delay    
                }),
            Animated.timing(                  
                this.state.position,            
                {
                  toValue: 1,                   
                  duration: 1000,
                  delay: 100 * this.props.delay,
                }),      
        ]).start();
    }
    render() {
        const position  = this.state.position.interpolate({
            inputRange: [0, 1],
            outputRange: [150, 0]
          });
        return (
            <Animated.View  style={{ opacity: this.state.opacity, transform:[{
                translateY: position
            }] }}>
                {this.props.children}
            </Animated.View>
        );
    }
}