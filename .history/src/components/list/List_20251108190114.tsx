import Filter from "./Filter";
import Items from "./Items";

export default function List({ items, onDelete }) {
  return (
    <div className={styles.container}>
      <Filter />
      <Items items={items} onDelete={onDelete} />
    </div>
  );
}
