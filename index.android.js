/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StyleSheet } from 'react-native';
import {Todo} from './src/app/Todo';
import styles from './styles'
import {Fancy} from './src/app/fancy'

// const Main = () => (<Todo styles={{styles}} />);
const Main = () => (<Fancy />);


AppRegistry.registerComponent('Todo', () => Main);
