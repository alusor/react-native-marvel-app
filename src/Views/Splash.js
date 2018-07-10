import React, {Component} from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import { connect } from 'react-redux';
class Splash extends Component {
    constructor(props){
        super(props);
        this.state = {
            bounce: new Animated.Value(0),
        }
    }
    componentDidMount() {
        Animated.spring(                  
          this.state.bounce,            
          {
            toValue: 1,                   
            duration: 10000,            
          }
        ).start();                       
      }
    
    render() {
        return (
            <LinearGradient colors={['#1E3744', '#1E5372']} style={styles.container}>
                <Animated.View
                    style={{ opacity: this.state.bounce }}
                >
                    <Text style={styles.welcome}>{this.props.appName}</Text>
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
      color: '#95CA3E'
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