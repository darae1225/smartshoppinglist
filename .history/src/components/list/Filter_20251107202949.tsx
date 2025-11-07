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
      {category.map((cat) => {
        <button className={styles.button}>{cat}</button>;
      })}
    </section>
  );
}
