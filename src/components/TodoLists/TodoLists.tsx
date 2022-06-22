import { FC, useState } from "react";

import ChooseCategoryContainer from "../ChooseCategoryContainer";
import UndeleteModal from "../UndeleteModal";

import { ITodoList } from "../../types/ITodoList";

import "./TodoLists.css";

interface Props {
  todos: ITodoList[];
  deleteTodo: (index: number) => void;
  undeleteTodo: () => void;
  makeTodoDone: (indexDone: number) => void;
  showingCategory: string;
}

const TodoLists: FC<Props> = ({
  todos,
  deleteTodo,
  undeleteTodo,
  makeTodoDone,
  showingCategory,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      <ul className="TodoListsContainer Body-TodoListsContainer">
        {todos.map((todo: ITodoList, index: number) => {
          if (todo.category === showingCategory || showingCategory === "All") {
            return (
              <li key={index} className="Li TodoList Body-TodoList">
                <span className="TodoList-Label" data-is-done={todo.isDone}>
                  {todo.label}
                </span>
                {/* TODO: add functionality to make todo done */}
                <div
                  onClick={() => makeTodoDone(index)}
                  title="make done"
                  className="TodoList-Icon"
                >
                  &#10004;
                </div>
                <div
                  onClick={() => {
                    deleteTodo(index);
                    setIsDeleteModalOpen(true);
                  }}
                  title="delete todo"
                  className="TodoList-Icon"
                >
                  &#128465;
                </div>
              </li>
            );
          }
          return null;
        })}
        {!todos.length && (
          <p className="TodoListsContainer-NoTodosLabel">
            There is no todos now...
          </p>
        )}
      </ul>

      {isDeleteModalOpen && (
        <UndeleteModal
          close={() => setIsDeleteModalOpen(false)}
          undeleteTodo={undeleteTodo}
        />
      )}
    </>
  );
};

export default TodoLists;
