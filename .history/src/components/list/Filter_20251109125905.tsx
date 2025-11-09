import styles from "./Filter.module.css";
import { category } from "../../data/category";

export default function Filter() {
  return (
    <section className={styles.container}>
      {category.map((cat) => {
        return <button className={styles.button}>{cat}</button>;
      })}
    </section>
  );
}
