import React from 'react';

import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export const TodoForm = (props) => (
  <View style={styles.form}>
    <TextInput style={styles.input}
      value={props.value}
      placeholder={"What's next?"}
      onChangeText={props.handleChange}
      onSubmitEditing={props.handleSubmit}
    />
    <TouchableOpacity style={styles.button} onPress={props.handleSubmit} >
      <Text style={styles.buttonText}>Make</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
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
  }
});
