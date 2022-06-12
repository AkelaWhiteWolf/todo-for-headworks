import { FC, useRef } from "react";

import "./TodoCreation.css";

interface ITodoCreation {
  addTodo: (label: string, category?: string, isDone?: boolean) => void;
}

const TodoCreation: FC<ITodoCreation> = ({ addTodo }) => {
  const todoInput = useRef(null);

  return (
    <div className="TodoCreation">
      <input
        type="text"
        placeholder="New task..."
        ref={todoInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // @ts-ignore
            addTodo(todoInput.current.value);
            // @ts-ignore
            todoInput.current.value = "";
          }
        }}
      />

      <button>
        Choose category <span>{">"}</span>
      </button>

      <button
        onClick={(e) => {
          // @ts-ignore
          addTodo(todoInput.current.value);
          // @ts-ignore
          todoInput.current.value = "";
        }}
      >
        Create
      </button>
    </div>
  );
};

export default TodoCreation;
