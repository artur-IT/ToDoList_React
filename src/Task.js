const Task = ({ id, name, deadline, important, active, remove, done }) => {
  return (
    <p style={active === false ? { textDecoration: "line-through" } : null}>
      <span style={important === true ? { color: "gold" } : null}>{name}</span>
      {deadline && <span>- do {deadline}</span>}
      <button className="done" onClick={done} id={id} name="done">
        zrobione
      </button>
      <button className="done" id={id} name="delete" onClick={remove}>
        X
      </button>
    </p>
  );
};

export default Task;
