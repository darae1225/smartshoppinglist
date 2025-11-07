import styles from "./Filter.module.css";
export default function Filter() {
  return (
    <section className={styles.container}>
      <button className={styles.button}>All</button>
      <button className={styles.button}>Dairy</button>
      <button className={styles.button}>Bakery</button>
      <button className={styles.button}>Meat</button>
    </section>
  );
}
