/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {Todo} from './src/app/Todo';
import {Fancy} from './src/app/fancy'
import {Reddit} from './src/app/Reddit'

// const Main = () => (<Todo />);
const Main = () => (<Reddit />);


AppRegistry.registerComponent('Todo', () => Main);
