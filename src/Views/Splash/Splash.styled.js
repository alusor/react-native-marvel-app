import styled from 'styled-components';
import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

const logo = require('../../Icons/marvel.png');

const Logo = styled.Image`
    width: 64px;
    height: 64px;
`;

class AnimatedLogo extends Component {
    state = {
        scale: new Animated.Value(.8),
        rotation: new Animated.Value(0),
        opacity: new Animated.Value(0)
    };
    componentDidMount(){
        Animated.parallel([
            Animated.timing(this.state.opacity,{
                toValue: 1,
                duration: 500,
            }),
            Animated.loop(
                Animated.sequence([
                    Animated.timing(this.state.scale, {
                        toValue: 1,
                        duration: 500,
                        delay: 0,
                        easing: Easing.bounce,
                      }),
                      Animated.timing(this.state.scale, {
                        toValue: .8,
                        duration: 500,
                      })
                ])
            ),
            Animated.loop(
                Animated.timing(this.state.rotation,{
                    toValue: 1,
                    duration: 500,
                    delay: 500,
                    easing: Easing.bounce
                })
            )
        ]).start();
    }
    render() {
        const rotation = this.state.rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          });
        const {opacity} = this.state;
        return (
            <Animated.View style={{ opacity, transform: [{scale: this.state.scale}, { rotateX: rotation }], }}>
                <Logo source={logo}/>
            </Animated.View>
        );
    }
}
 export {
     AnimatedLogo
 };