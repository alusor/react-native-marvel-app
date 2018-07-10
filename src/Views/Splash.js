import React, {Component} from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import { connect } from 'react-redux';
class Splash extends Component {
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
        Animated.parallel([
            Animated.timing(                  
                this.state.bounce,            
                {
                  toValue: 1,                   
                  duration: 1000,        
                }),
            Animated.timing(                  
                this.state.position,            
                {
                  toValue: 1,                   
                  duration: 1000,        
                }),      
        ]).start();

      }
    
    render() {
        const position  = this.state.position.interpolate({
            inputRange: [0, 1],
            outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
          });
        return (
            <LinearGradient colors={['#000', '#1e1e1e']} style={styles.container}>
                <Animated.View
                    style={{ opacity: this.state.bounce, transform:[{
                        translateY: position
                    }] }}
                >
                    <Text style={styles.welcome}>Marvel Heros</Text>
                </Animated.View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
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
      appName: state.appName
    }
  }

export default connect(mapStateToProps)(Splash);