import React, {Component} from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet

} from "react-native";
// import {styles} from "./stylesWalkthru"

export class Todo extends Component {
  constructor() {
    super();
    this.state = { todos: [],
      newTodo: "",
      url: "http://10.0.0.180:3000/todos",
      verb: "GET"

    }

  }


  componentDidMount() {
    fetch('http://10.0.0.180:3000/todos',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then(todos => {
      this.setState({todos, newTodo:""});
    })


  }

  handleChange(text) {
    this.setState({newTodo: text
    });

  }

  handleDeletePress(i) {
    const tempTodos = [...this.state.todos];
    const item = tempTodos[i].id;
    //  this.setState(
    //    {
    //      todos:[...tempTodos.slice(0,i),...tempTodos.slice(i+1)],
    //      url: `http://10.0.0.180:3000/todos`,
    //      value: {"id": item},
    //      verb: "DELETE"
    //    })
    fetch(`http://10.0.0.180:3000/todos/${item}`,{
      method: 'DELETE',
      body: JSON.stringify({"id": item}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      const r = response.json();
      console.log(r);
      console.log(response);

      return r;
    })

  }

  handleSubmit(e) {
      const newTodo = this.state.newTodo.trim();
      if(newTodo.length === 0){
        return;
      }
      fetch('http://10.0.0.180:3000/todos',{
        method: 'POST',
        body: JSON.stringify({"name": newTodo}),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then(todos => {
        this.setState({todos, newTodo:''});
      })
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput style={styles.input}
            value={this.state.newTodo}
            placeholder={"What's next?"}
            onChangeText={this.handleChange.bind(this)}
            onSubmitEditing={this.handleSubmit.bind(this)}
          />
          <TouchableOpacity style={styles.button} onPress={this.handleSubmit.bind(this)} >
            <Text style={styles.buttonText}>Make</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listView}>
          {console.log(Object.keys(this.state.todos))}
          {this.state.todos.map( (todo, i) => (
            <View style={styles.list} key={i}>
              <TouchableOpacity
                onPress={this.handleDeletePress.bind(this,i)}>
                <Text  style={styles.listText}>{todo.name}</Text>
              </TouchableOpacity>

            </View>

          ))}
        </View>
      </View>
    );
  }

}
const {width, height} =  Dimensions.get("window")
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "teal"
  },
  form: {
    flexDirection: "row",

  },
  input: {
    flex: 0.7,
    paddingVertical: 10,
    fontSize: 20
  },

  // button: {
  //   flex: 0.3,
  //   backgroundColor: "orange",
  //   borderRadius: 10,
  //   height: 30,
  //   alignSelf: "center",
  //   justifyContent: "center",
  button: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 4,
    top: 25,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  listView: {
    marginTop: 60
  },
    list: {
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: "lime"
    },
  listText: {
    color: "navy",
    fontSize: 24
  }

});
