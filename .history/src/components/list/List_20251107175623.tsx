import styles from "./List.module.css";
import Filter from "./Filter";
import Items from "./Items";

export default function List({ items, onDelete }) {
  return (
    <div>
      <Filter />
      <Items items={items} onDelete={onDelete} />
    </div>
  );
}
