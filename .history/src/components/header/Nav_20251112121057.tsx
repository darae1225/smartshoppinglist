import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { SlShare } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import styles from "./Nav.module.css";

export default function Nav() {
  const [shared, setShared] = useState(false);

  return (
    <nav>
      <section className={styles.container}>
        <section className={styles.navSection}>
          <BsCart3 size={30} className={styles.logo} />
          <p className={styles.logoText}>SmartList</p>
        </section>
        <section className={styles.navSection}>
          <button className={styles.button}>
            <SlShare size={24} />
          </button>
          <button className={styles.button}>
            <CgProfile size={24} />
          </button>
        </section>
      </section>
    </nav>
  );
}
