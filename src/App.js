import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    inputContent: "",
    todo: [{ name: "faire les courses", done: false }]
  };

  handleChange = evt => {
    this.setState({ inputContent: evt.target.value });
  };

  addTask = () => {
    // console.log("this.state.inputContent", this.state.inputContent);
    // console.log("this.state.todo", this.state.todo);
    this.state.todo.push({ name: this.state.inputContent, done: false });
    this.setState({ inputContent: "" });
  };

  toggleDone = evt => {
    let index = evt.target.getAttribute("name");
    let newArray = this.state.todo;
    console.log("this.state.todo[index].done;", this.state.todo[index].done);
    newArray[index].done = !this.state.todo[index].done;
    this.setState({ todo: newArray });
  };

  deleteTask = evt => {
    console.log(evt.target.getAttribute("name"));
    let index = evt.target.getAttribute("name");
    console.log("index", index);

    let newArray = this.state.todo;
    newArray.splice(index, 1);
    console.log("newarray", newArray);
    this.setState({ todo: newArray });
  };

  render() {
    return (
      <div className="App">
        {this.state.todo.length !== 0 && (
          <ul>
            {this.state.todo.map((elem, index) => (
              <div key={index}>
                <i
                  name={index}
                  onClick={this.deleteTask}
                  className="far fa-trash-alt"
                />{" "}
                <li
                  className={elem.done ? "listElement done" : "listElement"}
                  onClick={this.toggleDone}
                  name={index}
                >
                  {elem.name}
                </li>{" "}
                <br />
              </div>
            ))}
          </ul>
        )}
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.inputContent}
        />
        <button onClick={this.addTask}>Ajouter une tâche</button>
      </div>
    );
  }
}

export default App;
