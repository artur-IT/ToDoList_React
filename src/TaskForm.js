import "./MyApp.css";
import React, { Component } from "react";
import TaskList from "./TaskList";

class FormTask extends Component {
  copyStateList = this.props.taskList; // org. task list from index.js

  id = 2;
  name = "";
  deadlineDate = "";
  important = false;
  active = true;

  state = {
    copyList: this.copyStateList,
    newTask: {
      id: this.copyStateList.length,
      name: "",
      deadline: this.deadlineDate,
      important: false,
      active: true,
    },
  };

  // 3 input's handler
  handleInput = (e) => {
    const type = e.target.type;
    if (type === "text") this.name = e.target.value;
    if (type === "date") this.deadlineDate = e.target.valueAsDate.toISOString().slice(0, 10);
    if (type === "checkbox") this.important = e.target.checked;
    // update state (+ new task from form)
    this.setState({
      newTask: {
        id: this.id,
        name: this.name,
        deadline: this.deadlineDate,
        important: this.important,
      },
    });
  };

  // add new task
  add = (e) => {
    e.preventDefault();
    const inputAttention = document.querySelector("form > input");
    if (this.state.newTask.name !== "") {
      this.copyStateList.push(this.state.newTask);
      this.id++;
      this.name = "";
      this.deadlineDate = "";
      this.important = false;
      // zero's state!
      this.setState({
        copyList: this.copyStateList,
        newTask: {
          id: this.copyStateList.length + 1,
          name: this.name,
          deadline: this.deadlineDate,
          important: false,
        },
      });
      inputAttention.classList.remove("attention");
      return inputAttention.hasAttribute("required") ? null : inputAttention.setAttribute("required", "");
    } else {
      inputAttention.removeAttribute("required");
      inputAttention.classList.add("attention");
    }
  };

  // crossing out the task
  done = (e) => {
    const id = parseInt(e.target.id);
    this.copyStateList.forEach((task) => {
      if (task.id === id) task.active = !task.active;
    });
    this.setState({
      copyList: this.copyStateList,
    });
  };

  // delete task
  remove = (e) => {
    const id = parseInt(e.target.id);
    this.copyStateList.forEach((task) => {
      if (task.id === id) this.copyStateList.splice(this.copyStateList.indexOf(task), 1);
    });
    this.setState({
      copyList: this.copyStateList,
    });
  };

  render() {
    const { newTask, copyList } = this.state;
    return (
      <>
        <section className="one">
          <p>My React App</p>
          <div className="one_content">
            <p>Zadanie:</p>
            <p>Termin:</p>
            <p>Ważne:</p>
          </div>
        </section>

        <section className="two">
          <p>To Do List</p>
          <div className="two_form">
            <form name="addTask">
              <input
                className=""
                type="text"
                name="task"
                id="1"
                placeholder="wpisz zadanie"
                required
                onChange={this.handleInput}
                value={this.name}
              />
              <br />
              <label id="deadline">
                <input type="date" name="date" id="2" onChange={this.handleInput} value={newTask.deadline} />
              </label>
              <br />
              <label id="important">
                <input type="checkbox" id="checkbox" onChange={this.handleInput} checked={this.important} />
              </label>
            </form>
          </div>
        </section>

        <section className="three">
          <span className="to_do">Do zrobienia:</span>
          <div className="task_list">
            {copyList.length > 0 ? <TaskList TaskList={copyList} remove={this.remove} done={this.done} /> : "...wszystko zrobione..."}
          </div>
        </section>

        <div className="four">
          <button className="long_button" onClick={this.add}>
            DODAJ
          </button>
        </div>
      </>
    );
  }
}

export default FormTask;

/* PROBLEM - after add new task I must 2x click to cross task
 - I must fix clear data!   */
