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
    var title = this.state.editable ? <input type='text' className="form-control" ref='title' defaultValue={this.props.todo.title} /> : <div>{ this.props.todo.title }</div>;
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-lg-6">
            {title}
          </div>
          <div className="col-lg-3">
            <button className="btn btn-primary" onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
          </div>

          <div className="col-lg-3">
            <button className="btn btn-primary" onClick={this.props.handleDelete}>Delete</button>
          </div>
        </div>
      </li>
    )
  }
});
