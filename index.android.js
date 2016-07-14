/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StyleSheet } from 'react-native';
import {Todo} from './src/app/Todo';
import {Styles} from './styles'

const Main = () => (<Todo styles={{styles}} />);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    borderBottomColor: '#000000',
    borderBottomWidth: 1
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  }
});

AppRegistry.registerComponent('Todo', () => Main);
