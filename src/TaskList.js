import React from "react";
import Task from "./Task";

const TaskList = ({ remove, done, TaskList }) => {
  const showTasks = TaskList.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      name={task.name}
      deadline={task.deadline}
      important={task.important}
      active={task.active}
      remove={remove}
      done={done}
    />
  ));
  return showTasks;
};

export default TaskList;
