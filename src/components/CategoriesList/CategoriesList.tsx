import { FC, useState } from "react";

import clsx from "clsx";

import "./CategoriesList.css";

interface Props {
  categories: string[];
  showingCategory: string;
  deleteCategory: (categoryToDelete: string) => void;
  chooseCategory: (category: string) => void;
}

const CategoriesList: FC<Props> = ({
  categories,
  showingCategory,
  deleteCategory,
  chooseCategory,
}) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  return (
    <ul className="CategoriesListContainer Body-CategoriesListContainer">
      <li
        onClick={() => chooseCategory("All")}
        className="Li CategoriesListContainer-Li"
      >
        <span
          className="CategoriesListContainer-CategoryTitle"
          data-showing-category={showingCategory === "All"}
        >
          All
        </span>
      </li>
      {categories.map((category, index) => (
        <li
          key={category + index}
          onClick={() => chooseCategory(category)}
          className="Li CategoriesListContainer-Li"
          onMouseEnter={() => setShowDeleteBtn(true)}
          onMouseLeave={() => setShowDeleteBtn(false)}
        >
          <span
            onClick={() => chooseCategory(category)}
            className="CategoriesListContainer-CategoryTitle"
            data-showing-category={showingCategory === category}
          >
            {category}
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              deleteCategory(category);

              if (category === showingCategory) {
                chooseCategory("All");
              }
            }}
            className="CategoriesListContainer-DelBtn"
            data-is-visible={showDeleteBtn}
            title="delete category with todos"
          >
            &#10060;
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
