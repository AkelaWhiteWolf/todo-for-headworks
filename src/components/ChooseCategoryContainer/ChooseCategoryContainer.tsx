import { FC, useState } from "react";
import NewCategoryModal from "../NewCategoryModal";

import "./ChooseCategoryContainer.css";

interface Props {
  categories: string[];
  addCategory: (category: string) => void;
  currentCategory: string;
  chooseCategory: (category: string) => void;
}

const ChooseCategoryContainer: FC<Props> = ({
  addCategory,
  categories,
  currentCategory,
  chooseCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(categories);

  return (
    <div className="ChooseCategoryContainer">
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        title="Choose category for task"
        className="Btn Body-Btn"
      >
        {currentCategory} <span>{">"}</span>
      </button>

      {isOpen && (
        <ul>
          <li onClick={() => setIsModalOpen(true)} className="Li">
            Add new category...
          </li>
          <li onClick={() => chooseCategory("All")} className="Li">
            All
          </li>

          {categories.map((categ) => (
            <li onClick={() => chooseCategory(categ)} className="Li">
              {categ}
            </li>
          ))}
        </ul>
      )}

      {isModalOpen && (
        <NewCategoryModal
          close={() => setIsModalOpen(false)}
          addCategory={addCategory}
        />
      )}
    </div>
  );
};

export default ChooseCategoryContainer;
