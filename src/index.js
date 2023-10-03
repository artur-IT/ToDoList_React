import React from "react";
import ReactDOM from "react-dom/client";
import TaskForm from "./TaskForm";

const MyApp = () => {
  const deadlineDate = new Date().toLocaleDateString();
  const [tasks, setTask] = React.useState([
    {
      id: 0,
      name: "zadanie nr 1",
      deadline: deadlineDate,
      important: false,
      active: true,
    },
    {
      id: 1,
      name: "zadanie nr 2",
      deadline: deadlineDate,
      important: true,
      active: true,
    },
  ]);

  return <TaskForm taskList={tasks} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApp />);

export default MyApp;
