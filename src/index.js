import React, { Component } from "react";
import { StrictMode } from "react";
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

  taskStateList = () => {
    return true;
  };

  render() {
    return (
      <>
        <StrictMode>
          <TaskForm taskList={this.state.tasks} />
        </StrictMode>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApp />);

export default MyApp;
