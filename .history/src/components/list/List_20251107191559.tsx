import styles from "./List.module.css";
import Filter from "./Filter";
import Items from "./Items";

export default function List({ items, onDelete }) {
  return (
    <div className={styles.container}>
      <Filter className={styles.filter} />
      <Items className={styles.items} items={items} onDelete={onDelete} />
    </div>
  );
}
