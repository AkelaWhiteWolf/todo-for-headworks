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

  return (
    <div className="ChooseCategoryContainer">
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        title="Choose category for task"
        className="Btn Body-Btn ChooseCategoryContainer-Btn Btn_Green"
      >
        {currentCategory} {isOpen ? <span>&#9660;</span> : <span>&#9658;</span>}
      </button>

      {isOpen && (
        <ul className="ChooseCategoryContainer-Categories">
          <li
            onClick={() => {
              setIsModalOpen(true);
              setIsOpen(false);
            }}
            className="Li ChooseCategoryContainer-Li"
          >
            Add new category...
          </li>
          <li
            onClick={() => {
              chooseCategory("All");
              setIsOpen(false);
            }}
            className="Li ChooseCategoryContainer-Li"
          >
            All
          </li>

          {categories.map((categ, index) => (
            <li
              key={categ + index}
              onClick={() => chooseCategory(categ)}
              className="Li"
            >
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
