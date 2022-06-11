import { useState } from "react";
import TodoCreation from "../TodoCreation";
import TodoLists from "../TodoLists";

import { ITodoList } from "../../types/ITodoList";

const TodoContainer = () => {
  const [todos, setTodos] = useState<ITodoList[]>([]);

  const addTodo = (label: string, category?: string, isDone = false) => {
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

      prev.map((elem, index) => {
        if (index !== deleteIndex) {
          newState.push(elem);
        }
      });

      return newState;
    });
  };

  return (
    <>
      <TodoCreation addTodo={addTodo} />
      <TodoLists todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default TodoContainer;
