import "./MyApp.css";
import React from "react";
import TaskList from "./TaskList";
// propsy z index.js automatycznie przechodzą!

const FormTask = (props) => {
  const [copyList, setCopyList] = React.useState(props.taskList);
  const idUnique = Date.parse(new Date());
  const [newTask, setNewTask] = React.useState({
    id: idUnique,
    name: "",
    deadline: "",
    important: false,
    active: false,
  });

  // 3 INPUTS HANDLER'S
  const handleInput = () => {
    const inputAttention = document.querySelector("form > input");
    newTask.id = idUnique;
    newTask.name = inputAttention.value;
    // newTask.active = true;
    inputAttention.classList.remove("attention");
  };

  const handleDate = (e) => {
    newTask.deadline = e.target.valueAsDate.toISOString().slice(0, 10);
  };

  const handleImportant = (e) => {
    newTask.important = e.target.checked;
  };

  // CLEAR TASK AND INPUT!
  const clearTaskField = () => {
    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
    document.getElementById("checkbox").checked = false;
    setNewTask({
      id: idUnique,
      name: "",
      deadline: "",
      important: false,
      active: false,
    });
  };

  // ADD NEW TASK
  const add = (e) => {
    e.preventDefault();
    const input = document.querySelector("form > input");
    if (input.value !== "") {
      copyList.push(newTask);
      clearTaskField();
      setCopyList(copyList);
      return input.hasAttribute("required") ? null : input.setAttribute("required", "");
    } else {
      alert("wpisz nazwę zadania!");
      clearTaskField();
      input.removeAttribute("required");
      input.classList.add("attention");
    }
  };

  // CROSS-OUT TASK
  const done = (e) => {
    const id = parseInt(e.target.id);
    let newList = [...copyList];
    newList.map((task) => {
      if (task.id === id) task.active = !task.active;
      return setCopyList(newList);
    });
  };

  // REMOVE TASK
  const remove = (e) => {
    const id = parseInt(e.target.id);
    let newList = [...copyList];
    newList.map((task) => {
      if (task.id === id) newList.splice(newList.indexOf(task), 1);
      return setCopyList(newList);
    });
  };

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
              id="task"
              placeholder="wpisz zadanie"
              required
              onChange={handleInput}
              defaultValue={newTask.name}
            />
            <br />
            <label id="deadline">
              <input type="date" name="date" id="date" onChange={handleDate} defaultValue={newTask.deadline} />
            </label>
            <br />
            <label id="important">
              <input type="checkbox" id="checkbox" onChange={handleImportant} defaultChecked={newTask.important} />
            </label>
          </form>
        </div>
      </section>

      <section className="three">
        <span className="to_do">Do zrobienia:</span>
        <div className="task_list">
          {copyList.length > 0 ? <TaskList TaskList={copyList} remove={remove} done={done} /> : "...wszystko zrobione..."}
        </div>
      </section>

      <div className="four">
        <button className="long_button" onClick={add}>
          DODAJ
        </button>
      </div>
    </>
  );
};

export default FormTask;
