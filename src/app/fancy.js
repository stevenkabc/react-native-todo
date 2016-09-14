import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions
} from 'react-native';
import {styles} from './stylesFancy'


export class Fancy extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}></View>
           <Text style={styles.text}>Fancy</Text>
      </View>);
  }
};
