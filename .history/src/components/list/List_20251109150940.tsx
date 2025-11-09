import Filter from "./Filter";
import Items from "./Items";

export default function List({ items, onDelete }) {
  const { filteredCategory, setFilteredCategory } = useState("");
  const onFilter = (selectedCategory) => {
    console.log(selectedCategory);
    setFilteredCategory(selectedCategory);
  };
  return (
    <div>
      <Filter items={items} onFilter={onFilter} />
      <Items items={items} onDelete={onDelete} />
    </div>
  );
}
