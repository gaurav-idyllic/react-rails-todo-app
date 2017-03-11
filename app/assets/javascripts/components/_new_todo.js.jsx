var NewTodo = React.createClass({
  handleClick() {
    var title = this.refs.title.value;
    $.ajax({
      url: '/todos',
      type: 'POST',
      data: { todo: { title: title } },
      success: (todo) => {
        this.props.handleSubmit(todo)
      }
    });
  },

  render() {
    return (
      <div>
        <input ref='title' placeholder='Enter text here' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
