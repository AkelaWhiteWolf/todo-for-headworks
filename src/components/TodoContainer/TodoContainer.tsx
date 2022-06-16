import { useState } from "react";
import TodoCreation from "../TodoCreation";
import CategoriesList from "../CategoriesList";
import TodoLists from "../TodoLists";

import { ITodoList } from "../../types/ITodoList";

import "./TodoContainer.css";

const TodoContainer = () => {
  const [todos, setTodos] = useState<ITodoList[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [showingCategory, setShowingCategory] = useState("All");

  const addTodo = (label: string, category: string, isDone = false) => {
    label = label.trim();

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
    category = category.trim();

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

  const showListsByCategory = (category: string) => {
    category = category.trim();

    setShowingCategory(category);
  };

  return (
    <div className="TodoContainer App-TodoContainer">
      <TodoCreation
        addTodo={addTodo}
        categories={categories}
        addCategory={addCategory}
      />

      <CategoriesList
        categories={categories}
        showingCategory={showingCategory}
        deleteCategory={deleteCategory}
        showListsByCategory={showListsByCategory}
      />

      <TodoLists
        todos={todos}
        deleteTodo={deleteTodo}
        showingCategory={showingCategory}
      />
    </div>
  );
};

export default TodoContainer;
