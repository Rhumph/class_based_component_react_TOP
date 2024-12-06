import { Component } from "react";
import './counter'
import ClassCounter from "./counter";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
      isEditing: null,
      editVal: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputVal: e.target.value,
    });
  }

  handleEdit(index){ 
    this.setState({ 
        isEditing: index,
        editVal: this.state.todos[index]
    })
  }

  handleEditChange(e){ 
    this.setState({ 
        editVal: e.target.value,
    })
  }

  handleUpdate(index){ 
    const updatedTodos = [...this.state.todos]
    updatedTodos[index] = this.state.editVal;
    this.setState({ 
        todos: updatedTodos,
        isEditing: null,
        editVal: "",
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.inputVal.trim()) {
      this.setState((state) => ({
        todos: [...state.todos, state.inputVal.trim()],
        inputVal: "",
      }));
    }
  }

  handleDelete(index) {
    this.setState((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
            <h2><ClassCounter array={this.state.todos} /></h2>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {this.state.isEditing === index ? (
                <input
                  type="text"
                  value={this.state.editVal}
                  onChange={this.handleEditChange}
                />
              ) : (
                todo
              )}
              <button onClick={() => this.handleDelete(index)}>Delete</button>
              {this.state.isEditing === index ? (
                <button onClick={() => this.handleUpdate(index)}>Update</button>
              ) : (
                <button onClick={() => this.handleEdit(index)}>Edit</button>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
