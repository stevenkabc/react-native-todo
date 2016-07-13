/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View} from 'react-native';
import  {Todo} from './src/app/Todo.js'


// const Main = () => (<Todo />)
class Main extends Component {
  render() {
    return (
      <View>
      <Todo >
lkjljkl
      </Todo>
      <Text>Goodbye</Text>
      </View>


    )
  }
}


AppRegistry.registerComponent('Todo', () => Main);
