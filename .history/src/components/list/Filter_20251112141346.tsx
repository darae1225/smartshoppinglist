import styles from "./Filter.module.css";
import { category } from "../../data/category";
import { useState } from "react";

type FilterProps = {
  onFilter: (selectedCategory: string) => void;
};

export default function Filter({ onFilter }: FilterProps) {
  const [filter, setFilter] = useState<string>("Any");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedCategory = e.currentTarget.value;
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
