import { useRef } from "react";
import { ITodoList } from "../../types/ITodoList";

import "./TodoCreation.css";

interface ITodoCreation {
  addTodo: (todo: ITodoList) => void;
}

const TodoCreation = ({ addTodo }: { addTodo: ITodoCreation }) => {
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
