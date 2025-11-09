import styles from "./Filter.module.css";
import { category } from "../../data/category";
import { useState } from "react";

export default function Filter({ items, onFilter }) {
  const [filter, setFilter] = useState("Any");

  const handleClick = (e) => {
    const selectedCategory = e.target.value;
    setFilter(selectedCategory);
    onFilter(filter);
  };

  return (
    <section className={styles.container}>
      {category.map((cat) => {
        return (
          <button
            id={cat}
            value={cat}
            className={styles.button}
            onClick={handleClick}
          >
            {cat}
          </button>
        );
      })}
    </section>
  );
}
