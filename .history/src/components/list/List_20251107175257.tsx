import styles from "./List.module.css";
import Filter from "./Filter";
import Items from "./Items";

export default function List({ items, onDelete }) {
  return (
    <section className={styles.container}>
      <Filter />
      <Items items={items} onDelete={onDelete} />
    </section>
  );
}
