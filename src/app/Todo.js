import React, {Component} from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Walk the cat","Buy Milk", "Brush Teeth","Kill the cat","Get Sleep"],
      newTodo: "",
      toggled: false,
      bark: true
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
    const styles = this.props.styles
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
