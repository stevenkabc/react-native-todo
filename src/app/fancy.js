import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import {styles} from './stylesFancy'

export class Fancy extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}></View>
        <Text style={styles.text}>MyComponent 2</Text>


      </View>);
  }
};
