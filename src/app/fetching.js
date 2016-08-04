  _doData = (url, verb, operand) => {

    const checkStatus = (response) => {
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    }

    const parseJSON = (response) => {
      console.log(response)
      return response.json()
    }

    fetch('http://10.0.0.180:3000/todos',{
      method: verb,
      body: JSON.stringify({
        operand
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(todos => {

      const Ntodos = [...this.state.newTodos, todos];
      this.setState({Ntodos, newTodo:''});
    })
    .catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }
