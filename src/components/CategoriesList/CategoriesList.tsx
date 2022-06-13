import "./CategoriesList.css";

const CategoriesList = ({ categories }: { categories: string[] }) => {
  return (
    <ul>
      {categories.map((category) => (
        <li>{category}</li>
      ))}
    </ul>
  );
};

export default CategoriesList;
