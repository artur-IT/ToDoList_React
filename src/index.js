import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import TaskForm from "./TaskForm";

class MyApp extends Component {
  deadlineDate = new Date().toLocaleDateString();
  state = {
    tasks: [
      {
        id: 0,
        name: "zadanie nr 1",
        deadline: this.deadlineDate,
        important: false,
        active: true,
      },
      {
        id: 1,
        name: "zadanie nr 2",
        deadline: this.deadlineDate,
        important: true,
        active: true,
      },
    ],
  };

  taskStateList = () => true;

  render() {
    return <TaskForm taskList={this.state.tasks} />;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);
export default MyApp;
