import Filter from "./Filter";
import Items from "./Items";

export default function List({ items, onDelete }) {
  const onFilter = (selectedCategory) => {
    console.log(selectedCategory);
  };
  return (
    <div>
      <Filter items={items} onFilter={onFilter} />
      <Items items={items} onDelete={onDelete} />
    </div>
  );
}
