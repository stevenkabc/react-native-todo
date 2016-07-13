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
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';


class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Walk the Dog","Buy Milk", "Brush Teeth"],
      newTodo: "",
      toggled: false
    }

  }

  handleChange(text) {
    this.setState({newTodo: text})

  }

  handlePress(i) {
    const tempTodos = [...this.state.todos]
     this.setState({todos:[...tempTodos.slice(0,i),...tempTodos.slice(i+1)]})
  }


  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{fontSize: 20}}
        onChangeText={this.handleChange.bind(this)}
        onSubmitEditing={() => {this.setState({
          todos: [...this.state.todos, this.state.newTodo],
          newTodo: ''});
          }
        }
        value={this.state.newTodo} />
        {this.state.todos.map( (todo, i) =>
          <TouchableHighlight key={i+100
          } onPress={this.handlePress.bind(this,i)}>
          <Text  key={i} style={styles.welcome} >{todo} </Text>
          </TouchableHighlight>

        )}

      </View>
    );
  }

}

global.todo = Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomColor: '#000000',
    borderBottomWidth: 1
  },


  welcome: {
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
});
console.log(Todo);
AppRegistry.registerComponent('Todo', () => Todo);
