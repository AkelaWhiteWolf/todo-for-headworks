import { FC, useEffect, useRef, useState } from "react";

import ChooseCategoryContainer from "../ChooseCategoryContainer";

import "./TodoCreation.css";

interface Props {
  addTodo: (label: string, category: string, isDone?: boolean) => void;
  categories: string[];
  addCategory: (category: string) => void;
}

const TodoCreation: FC<Props> = ({ addTodo, categories, addCategory }) => {
  const [currentCategory, setCurrentCategory] = useState("All");
  const todoInput = useRef(null);

  const chooseCategory = (category: string) => setCurrentCategory(category);

  useEffect(() => {
    if (!categories.includes(currentCategory)) {
      setCurrentCategory("All");
    }
  }, [categories.length]);

  return (
    <div className="TodoCreation TodoContainer-Creation">
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
        className="Input Body-Input"
      />

      <button
        onClick={(e) => {
          // @ts-ignore
          addTodo(todoInput.current.value, currentCategory);
          // @ts-ignore
          todoInput.current.value = "";
        }}
        className="Btn Body-Btn Btn_Blue"
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
