import { useState } from "react";
import "./App.css";
import TodoList, { TaskType } from "./components/TodoList/TodoList.tsx";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "task one", isDone: true },
    { id: 2, title: "task two", isDone: true },
    { id: 3, title: "task three", isDone: false },
  ]);

  function removeTask(id: number) {
    const filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }
  return (
    <>
      <TodoList tasks={tasks} removeTask={removeTask}></TodoList>
    </>
  );
}

export default App;
