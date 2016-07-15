import React, {Component} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View

} from 'react-native';
import {styles} from './styles'

export class Todo extends Component {
  constructor() {
    super();
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
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <TextInput style={styles.textEdit }
            value={this.state.newTodo}
            placeholder={"What's next?"}
            onChangeText={this.handleChange.bind(this)}
            onSubmitEditing={ () =>
              this.setState(
              {todos: [...this.state.todos, this.state.newTodo], newTodo: ''}
            )} />
        </View>

        <View style={styles.container}>
          {this.state.todos.map( (todo, i) => (
            <TouchableOpacity style={styles.welcome} key={i+100} onPress={this.handlePress.bind(this,i)}>
              <Text  key={i} style={styles.text} >{todo} </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }

}
