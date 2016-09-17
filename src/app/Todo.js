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
// const JSON_SERVER = '10.0.0.180:3000'
const JSON_SERVER = '172.20.42.42:3000'

export class Todo extends Component {
  constructor() {
    super();
    this.state = { todos: [],
      newTodo: "",
      url: "http://${JSON_SERVER}/todos",
      verb: "GET"

    }

  }


  componentDidMount() {
    fetch(`http://${JSON_SERVER}/todos`,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    })
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then(todos => {
      this.setState({todos, newTodo:""});
    })
    .catch(function(ex) {
      console.log('parsing failed', ex)
    })



  }

  handleChange(text) {
    this.setState({newTodo: text
    });

  }

  handleDeletePress(i) {
    const tempTodos = [...this.state.todos];
    const item = tempTodos[i].id;
    this.setState(
       {
         todos:[...tempTodos.slice(0,i),...tempTodos.slice(i+1)],

       })
    fetch(`http://${JSON_SERVER}/todos/${item}`,{
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
      fetch(`http://${JSON_SERVER}/todos`,{
        method: 'POST',
        body: JSON.stringify({"name": newTodo}),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        const res = response.json();
        console.log(response,res);

        return res;
      })
      .then(zzz => {
        console.log("todos=",zzz)
        this.setState({todos: [...this.state.todos,zzz], newTodo:''});
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
          {console.log(this.state.todos)}
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
