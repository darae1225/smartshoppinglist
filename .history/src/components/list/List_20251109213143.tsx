import { useState } from "react";
import Filter from "./Filter";
import Items from "./Items";

export default function List({ items, onDelete, dealOption, setDeleteOption }) {
  const [filteredCategory, setFilteredCategory] = useState("");

  const onFilter = (selectedCategory) => {
    setFilteredCategory(selectedCategory);
  };

  return (
    <div>
      <Filter onFilter={onFilter} />
      <Items
        items={items}
        onDelete={onDelete}
        filteredCategory={filteredCategory}
        dealOption={dealOption}
      />
    </div>
  );
}
