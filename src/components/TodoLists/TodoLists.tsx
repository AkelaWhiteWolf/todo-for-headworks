import React from "react";

import { ITodoList } from "../../types/ITodoList";

import "./TodoLists.css";

const TodoLists = ({
  todos,
  deleteTodo,
}: {
  todos: ITodoList[];
  deleteTodo: (index: number) => void;
}) => {
  return (
    (todos.length && (
      <ul>
        {todos.map((elem: ITodoList, index: number) => (
          <li key={index}>
            <span>{elem.label}</span>

            <div onClick={() => deleteTodo(index)}>X</div>
          </li>
        ))}
      </ul>
    )) || <p>There is no todos now</p>
  );
};

export default TodoLists;
