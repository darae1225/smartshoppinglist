import styles from "./Header.module.css";
import Nav from "./nav";

export default function Header() {
  return (
    <header>
      <Nav />
      <section className={styles.dealSection}>
        <button className={styles.dealButton}>Essentials</button>
        <button className={styles.dealButton}>Wait for Deals</button>
      </section>
    </header>
  );
}
