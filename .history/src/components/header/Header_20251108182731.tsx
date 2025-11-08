import styles from "./Header.module.css";
import Nav from "./nav";

export default function Header() {
  return (
    <header className={styles.header}>
      <Nav />
    </header>
  );
}
