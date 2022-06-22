import { useRef, useState } from "react";
import TodoCreation from "../TodoCreation";
import CategoriesList from "../CategoriesList";
import TodoLists from "../TodoLists";

import { ITodoList } from "../../types/ITodoList";

import "./TodoContainer.css";

const TodoContainer = () => {
  const [todos, setTodos] = useState<ITodoList[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  console.log(categories);
  const [showingCategory, setShowingCategory] = useState("All");

  const todosBeforeDelete = useRef([...todos]);

  const addTodo = (label: string, category: string, isDone = false) => {
    label = label.trim();

    if (label) {
      const todo: ITodoList = {
        label,
        category,
        isDone,
      };

      const newStateNotDone = todos.filter((todo) => todo.isDone === false);
      const newStateDone = todos.filter((todo) => todo.isDone);

      newStateNotDone.push(todo);

      setTodos([...newStateNotDone, ...newStateDone]);
    }
  };

  const deleteTodo = (deleteIndex: number) => {
    todosBeforeDelete.current = [...todos];

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

  const undeleteTodo = () => setTodos([...todosBeforeDelete.current]);

  const makeTodoDone = (indexDone: number) => {
    let newState = todos.map((todo, index) => {
      if (index === indexDone) {
        return { ...todo, isDone: !todo.isDone };
      }

      return todo;
    });

    const newStateNotDone = newState.filter((todo) => todo.isDone === false);
    const newStateDone = newState.filter((todo) => todo.isDone);

    setTodos([...newStateNotDone, ...newStateDone]);
  };

  const addCategory = (category: string) => {
    category = category.trim();

    if (category && !categories.includes(category)) {
      setCategories((prev) => [...prev, category]);
    }
  };

  const deleteCategory = (categoryToDelete: string) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.category === categoryToDelete) {
          const newTodo = { ...todo };
          newTodo.category = "All";

          return newTodo;
        }

        return todo;
      })
    );

    setCategories((prev) => {
      const newState: string[] = [];

      for (let category of prev) {
        if (category !== categoryToDelete) {
          newState.push(category);
        }
      }

      return newState;
    });
  };

  const chooseCategory = (category: string) => {
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
        chooseCategory={chooseCategory}
      />

      <TodoLists
        todos={todos}
        deleteTodo={deleteTodo}
        showingCategory={showingCategory}
        undeleteTodo={undeleteTodo}
        makeTodoDone={makeTodoDone}
      />
    </div>
  );
};

export default TodoContainer;
