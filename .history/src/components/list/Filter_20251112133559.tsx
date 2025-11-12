import styles from "./Filter.module.css";
import { category } from "../../data/category";
import { useState } from "react";
import type { Item } from "../../type/item";

type FilterProps = {
  onFilter: (item: Item) => void;
};

export default function Filter({ onFilter }: FilterProps) {
  const [filter, setFilter] = useState("Any");

  const handleClick = (e: ) => {
    const selectedCategory = e.target.value;
    setFilter(selectedCategory);
    console.log(selectedCategory);
    onFilter(selectedCategory);
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
