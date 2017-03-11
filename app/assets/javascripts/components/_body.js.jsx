var Body = React.createClass({

  getInitialState(){
    return { todos: []}
  },

  componentDidMount() {
    $.getJSON('/todos.json', (response) => { this.setState({ todos: response}) })
  },

  handleSubmit(todo) {
    var newState = this.state.todos.concat(todo);
    this.setState({todos: newState})
  },

  handleDelete(id) {
    $.ajax({
      url: '/todos/' + id,
      type: 'DELETE',
      success: () => {
        this.removeTodoClient(id);
      }
    });
  },

  removeTodoClient(id) {
    var newTodos = this.state.todos.filter((todo) => {
      return todo.id != id;
    });
    this.setState({todos: newTodos})
  },

  handleUpdate(todo) {
    $.ajax({
      url: '/todos/' + todo.id,
      type: 'PUT',
      data: {todo: todo },
      success: () => {
        this.updateTodos(todo);
      }
    });
  },

  updateTodos(todo) {
    var todos = this.state.todos.filter((i) => {
      { return i.id != todo.id }
    });
    todos.push(todo);

    this.setState({todos: todos});
  },

  render() {
    return (
      <div className="">
        <NewTodo handleSubmit={this.handleSubmit} />
        <div className="panel-heading ml-25">
          <h2>Recent Todo List</h2>
        </div>
        <AllTodos todos={this.state.todos} handleDelete={this.handleDelete} onUpdate={this.handleUpdate} />
      </div>
    )
  }
});
