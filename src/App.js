import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      { text: task, completed: false }
    ]);

    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    );

    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial"
      }}
    >
      <h1>Team Task Manager</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginRight: "10px"
        }}
      />

      <button
        onClick={addTask}
        style={{
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Add Task
      </button>

      <div style={{ marginTop: "30px" }}>
        {tasks.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px"
            }}
          >
            <h3
              style={{
                textDecoration: item.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {item.text}
            </h3>

            <button
              onClick={() =>
                toggleComplete(index)
              }
              style={{
                marginRight: "10px",
                padding: "5px 10px"
              }}
            >
              Complete
            </button>

            <button
              onClick={() =>
                deleteTask(index)
              }
              style={{
                padding: "5px 10px",
                backgroundColor: "red",
                color: "white",
                border: "none"
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
