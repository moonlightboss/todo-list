import { useState } from "react";
import "./App.css";
import TodoList, { TaskType } from "./components/TodoList/TodoList.tsx";

export type FilterValuesType = "all" | "complited" | "active";

function App() {
  const [tasks, setTasks] = useState<Array<TaskType>>([
    { id: 1, title: "task one", isDone: true },
    { id: 2, title: "task two", isDone: true },
    { id: 3, title: "task three", isDone: false },
  ]);

  const [filter, setFilter] = useState<FilterValuesType>("all");

  let tasksForTodoList = tasks;
  if (filter === "complited") {
    tasksForTodoList = tasks.filter((t) => t.isDone === true); //Фильтр
  }
  if (filter === "active") {
    tasksForTodoList = tasks.filter((t) => t.isDone === false);
  }

  function removeTask(id: number) {
    //Удаление
    const filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }
  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }
  return (
    <>
      <TodoList
        tasks={tasksForTodoList}
        removeTask={removeTask}
        changeFilter={changeFilter}
      ></TodoList>
    </>
  );
}

export default App;
