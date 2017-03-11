var NewTodo = React.createClass({
  handleClick() {
    var title = this.refs.title.value.trim();
    $.ajax({
      url: '/todos',
      type: 'POST',
      data: { todo: { title: title } },
      success: (todo) => {
        this.props.handleSubmit(todo);
        this.refs.title.value = '';
      }
    });
  },

  render() {
    return (
      <div className="row ml-25">
        <div className="col-lg-6">
          <input className="form-control" ref='title' placeholder='Enter todo text here' />
        </div>
        <div className="col-lg-6">
          <button className="btn btn-default btn-lg active" onClick={this.handleClick}>Add</button>
        </div>
      </div>
    )
  }
});
