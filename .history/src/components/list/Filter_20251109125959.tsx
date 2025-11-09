import styles from "./Filter.module.css";
import { category } from "../../data/category";
import { useState } from "react";

export default function Filter() {
  const [filter, setFilter] = useState("");

  return (
    <section className={styles.container}>
      {category.map((cat) => {
        return <button className={styles.button}>{cat}</button>;
      })}
    </section>
  );
}
