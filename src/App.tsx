import "./App.css";
import TodoList, { TaskType } from "./components/TodoList/TodoList.tsx";

let tasks: Array<TaskType> = [
  { id: 1, title: "task one", isDone: true },
  { id: 2, title: "task two", isDone: true },
  { id: 3, title: "task three", isDone: false },
];
function removeTask(id:number){
  tasks = tasks.filter(t=> t.id !== id)
}

function App() {
  return (
    <>
      <TodoList tasks={tasks} removeTask={removeTask}></TodoList>
    </>
  );
}

export default App;
