/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import WaveAnimation from 'react-native-wave-animation';

export default class example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WaveAnimation
          frontWaveColor="rgba(255,255,255,0.5)"
          behindWaveColor="yellow"
          style={{
            width:200,
            height:200,
            backgroundColor: 'black',
            justifyContent: 'center',
          }}
        >
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        </WaveAnimation>
      </View>
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
    color: 'red',
    backgroundColor: 'transparent'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('example', () => example);
