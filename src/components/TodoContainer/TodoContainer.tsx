import { useState } from "react";
import TodoCreation from "../TodoCreation";
import CategoriesList from "../CategoriesList";
import TodoLists from "../TodoLists";

import { ITodoList } from "../../types/ITodoList";

const TodoContainer = () => {
  const [todos, setTodos] = useState<ITodoList[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const addTodo = (label: string, category: string, isDone = false) => {
    const todo: ITodoList = {
      label,
      category,
      isDone,
    };

    setTodos([...todos, todo]);
  };

  const deleteTodo = (deleteIndex: number) => {
    setTodos((prev) => {
      const newState: ITodoList[] = [];

      prev.forEach((elem, index) => {
        if (index !== deleteIndex) {
          newState.push(elem);
        }
      });

      return newState;
    });
  };

  const addCategory = (category: string) => {
    if (category) {
      setCategories((prev) => [...prev, category]);
    }
  };

  const deleteCategory = (categoryToDelete: string) => {
    const newState: string[] = [];

    setCategories((prev) => {
      prev.forEach((category) => {
        if (category !== categoryToDelete) {
          newState.push(category);
        }
      });

      return newState;
    });
  };

  return (
    <>
      <TodoCreation
        addTodo={addTodo}
        categories={categories}
        addCategory={addCategory}
      />

      <CategoriesList categories={categories} />

      <TodoLists todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default TodoContainer;
