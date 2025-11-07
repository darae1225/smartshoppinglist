import styles from "./Filter.module.css";
export default function Filter() {
  return (
    <section className={styles.container}>
      <button>All</button>
      <button>Dairy</button>
      <button>Bakery</button>
      <button>Meat</button>
    </section>
  );
}
