import styles from "./Filter.module.css";
export default function Filter() {
  const category = [
    "Any",
    "Dairy",
    "Bakery",
    "Meat",
    "Seafood",
    "Asian",
    "Drinks",
  ];

  return (
    <section className={styles.container}>
      <button className={styles.button}>All</button>
    </section>
  );
}
