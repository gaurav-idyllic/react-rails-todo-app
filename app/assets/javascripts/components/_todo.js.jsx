var Todo = React.createClass({

  getInitialState() {
    return { editable: false }
  },

  handleEdit() {
    if(this.state.editable) {
      var title = this.refs.title.value;
      var id = this.props.todo.id;
      var todo = { id: id, title: title };
      this.props.handleUpdate(todo);
    }
    this.setState({editable: !this.state.editable})
  },

  render() {
    var title = this.state.editable ? <input type='text' ref='title' defaultValue={this.props.todo.title} /> : <h3>{ this.props.todo.title }</h3>;
    return (
      <div>
        {title}
        <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    )
  }
});
