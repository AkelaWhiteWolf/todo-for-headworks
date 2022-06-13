import { FC, useRef, useState } from "react";

import ChooseCategoryContainer from "../ChooseCategoryContainer";

import { ITodoCreation } from "../../types/ITodoCreation";

import "./TodoCreation.css";

const TodoCreation: FC<ITodoCreation> = ({
  addTodo,
  categories,
  addCategory,
}) => {
  const [currentCategory, setCurrentCategory] = useState("All");
  const todoInput = useRef(null);

  const chooseCategory = (category: string) => setCurrentCategory(category);

  return (
    <div className="TodoCreation">
      <input
        type="text"
        placeholder="New task..."
        ref={todoInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // @ts-ignore
            addTodo(todoInput.current.value, currentCategory);
            // @ts-ignore
            todoInput.current.value = "";
          }
        }}
      />

      <button
        onClick={(e) => {
          // @ts-ignore
          addTodo(todoInput.current.value, currentCategory);
          // @ts-ignore
          todoInput.current.value = "";
        }}
      >
        Create
      </button>

      <ChooseCategoryContainer
        categories={categories}
        addCategory={addCategory}
        currentCategory={currentCategory}
        chooseCategory={chooseCategory}
      />
    </div>
  );
};

export default TodoCreation;
