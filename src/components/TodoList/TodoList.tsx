import { FilterValuesType } from "../../App";

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};
type PropsType = {
  tasks: Array<TaskType>;
  removeTask:(id:number)=> void; //убрать, просто Function лучше не использовать.
  changeFilter:(value:FilterValuesType)=> void;
};

function TodoList(props: PropsType) {
  return (
    <>
      <div>
        <h3>todos</h3>
        <input type="text" placeholder="What needs to be done?"></input>
        <button>+</button>
        <ul>
          {props.tasks.map((t) => {
            return (
              <>
                <li>
                  <input type="checkbox" checked={t.isDone} />
                  <span>{t.title}</span>
                  <button onClick={()=>props.removeTask(t.id)}>X</button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <div>
        <button onClick={()=> {props.changeFilter("all")}}>All</button>
        <button onClick={()=> {props.changeFilter("active")}}>Active</button>
        <button onClick={()=> {props.changeFilter("complited")}}>Complited</button>
        <button>Clear complited</button>
      </div>
    </>
  );
}

export default TodoList;
