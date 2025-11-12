import { useState } from "react";
import Filter from "./Filter";
import Items from "./Items";
import type { Item } from "../../type/item";

type ListProps = {
  items: Item[];
  onDelete: (item: Item) => void;
};

export default function List({ items, onDelete }) {
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
      />
    </div>
  );
}
