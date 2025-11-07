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
      {category.map((cat, index) => {
        return (
          <button key={index} className={styles.button}>
            {cat}
          </button>
        );
      })}
    </section>
  );
}
