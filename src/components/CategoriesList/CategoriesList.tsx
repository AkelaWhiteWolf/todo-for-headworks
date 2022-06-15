import { FC } from "react";
import "./CategoriesList.css";

interface Props {
  categories: string[];
  deleteCategory: (categoryToDelete: string) => void;
  showListsByCategory: (category: string) => void;
}

const CategoriesList: FC<Props> = ({
  categories,
  deleteCategory,
  showListsByCategory,
}) => {
  return (
    <ul>
      <li onClick={() => showListsByCategory("All")}>
        <span>All</span>
      </li>
      {categories.map((category, index) => (
        <li
          key={category + index}
          onClick={() => showListsByCategory(category)}
        >
          <span>{category}</span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              deleteCategory(category);
            }}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;