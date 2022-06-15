import { FC } from "react";

import { ITodoList } from "../../types/ITodoList";

import "./TodoLists.css";

interface Props {
  todos: ITodoList[];
  deleteTodo: (index: number) => void;
  showingCategory: string;
}

const TodoLists: FC<Props> = ({ todos, deleteTodo, showingCategory }) => {
  return (
    (todos.length && (
      <ul>
        {todos.map((elem: ITodoList, index: number) => {
          if (elem.category === showingCategory || showingCategory === "All") {
            return (
              <li key={index}>
                <span>{elem.label}</span>

                <div onClick={() => deleteTodo(index)}>X</div>
              </li>
            );
          }

          return null;
        })}
      </ul>
    )) || <p>There is no todos now</p>
  );
};

export default TodoLists;
